import * as React from 'react'
import * as Yup from 'yup'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components'
import API from '../../utils/API'

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
      'Password must contain 8-12 characters. Password must contain 1 capital letter. Password must contain 1 lower case letter. Password must contain 1 number',
    )
    .required('Enter your password'),
});

const initialValues = {
  email: '',
  password: '',
};

interface LoginDialogState {
  open: boolean;
  isAuthenticated: boolean;
}

interface LoginDialogProps {
  userHasAuthenticated: boolean;
}

class LoginDialog extends React.Component<LoginDialogProps, LoginDialogState> {
  constructor(props: LoginDialogProps) {
    super(props);
    this.state = {
      open: false,
      isAuthenticated: false,
    };
  }

  userHasAuthenticated = (authenticated: any) => {
    this.setState({ isAuthenticated: true });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <ListItem>
        <Button onClick={this.handleClickOpen}>Login</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='login-form-dialog-title'
        >
          <DialogTitle id='login-form-dialog-title'>
            Login to Your Account
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Your Email &amp; Password to Login!
            </DialogContentText>
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              validateOnChange
              onSubmit={async values => {
                const res = await API.loginUser(values);
                console.log(res);
                if (res.status === 200) {
                  this.userHasAuthenticated(true);
                  document.cookie = `id=${res.data.id}`;
                }
              }}

              /* tslint:enable jsx-no-lambda */
            >
              <Form>
                <Field
                  required
                  name='email'
                  label='Email'
                  type='email'
                  component={TextField}
                />
                <Field
                  required
                  name='password'
                  label='Password'
                  type='password'
                  component={TextField}
                />
                <Button onClick={this.handleClose}>Cancel</Button>
                <Button onClick={this.handleClose} type='submit'>
                  Login
                </Button>
              </Form>
            </Formik>
          </DialogContent>
        </Dialog>
      </ListItem>
    );
  }
}

export default LoginDialog;