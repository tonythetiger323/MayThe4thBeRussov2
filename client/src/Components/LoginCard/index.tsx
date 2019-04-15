import * as React from 'react';
import * as Yup from 'yup';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components';
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
  password: ''
};

const LoginCard = () => {
  return(
    <Card>
      <CardHeader>Login</CardHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          validateOnChange
          onSubmit={values => {
            console.log(`Axios is making a request to 'api/rsvps'`);
            API.loginUser(values)
          }}
        >
          <Form>
            <CardContent>
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
              <CardActions>
                <Button type='submit'>
                  Login
                </Button>
              </CardActions>
            </CardContent>
          </Form>
        </Formik>
    </Card>
  )
}

export default LoginCard