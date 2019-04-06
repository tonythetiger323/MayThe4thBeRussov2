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
import { connect } from 'react-redux';
import { registerUserAction } from '../../redux/actions/authenticationActions';
// import readCookie from '../../../scripts/readCookie'

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
      'Password must contain 8-12 characters. Password must contain 1 capital letter. Password must contain 1 lower case letter. Password must contain 1 number',
    )
    .required('Enter your password'),
  confirmPassword: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  };

interface RegisterDialogState {
  open: boolean
  }

class RegisterDialog extends React.Component<
  any,
  RegisterDialogState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false
      };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    return (
      <ListItem>
        <Button onClick={this.handleClickOpen}>Register</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='register-form-dialog-title'
        >
          <DialogTitle id='register-form-dialog-title'>
            Register for an Account
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Register for an account so you can RSVP and leave a message in the
              online guesbook!
            </DialogContentText>
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidationSchema}
              validateOnChange
              onSubmit={async values => {
                await API.registerUser(values);
                this.props.dispatch(registerUserAction(values))
                }
              }
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
                <Field
                  required
                  name='confirmPassword'
                  label='confirmPassword'
                  type='password'
                  component={TextField}
                />
                <Button onClick={this.handleClose}>Cancel</Button>
                <Button onClick={this.handleClose} type='submit'>
                  Register
                </Button>
              </Form>
            </Formik>
          </DialogContent>
        </Dialog>
      </ListItem>
    );
  }
}

const mapStateToProps = (response: any) => ({
  response
})

export default connect(mapStateToProps)(RegisterDialog);
