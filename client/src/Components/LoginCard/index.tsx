import * as React from 'react'
import * as Yup from 'yup'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components'
import { useSnackbar } from 'notistack'
import API from '../../utils/API'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'
import history from '../../history'

const loginValidationSchema = Yup.object({
  username: Yup.string().required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
      'Password must contain 8-12 characters. Password must contain 1 capital letter. Password must contain 1 lower case letter. Password must contain 1 number'
    )
    .required('Enter your password')
})

const initialValues = {
  username: '',
  password: ''
}

const LoginCard = (props: any) => {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <Card>
      <CardHeader>Login</CardHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        validateOnChange
        onSubmit={async (values, { resetForm }) => {
          console.log(`Axios is making a request to 'api/auth/login'`)
          const res = await API.loginUser(values)
          console.log(res)
          if (res.status === 201) {
            enqueueSnackbar('Login Successful', {
              variant: 'success',
              preventDuplicate: true,
              autoHideDuration: 5000
            })

            props.loginUser(res.data.user)
            localStorage.setItem('access_token', res.data.access_token)
            history.push('/rsvpdashboard')
          } else {
            enqueueSnackbar('Login Failed', {
              variant: 'error',
              preventDuplicate: true,
              autoHideDuration: 5000
            })
          }
          resetForm()
        }}
      >
        <Form>
          <CardContent>
            <Field
              required
              name="username"
              label="Username"
              type="text"
              component={TextField}
            />
            <Field
              required
              name="password"
              label="Password"
              type="password"
              component={TextField}
            />
            <CardActions>
              <Button type="submit">Login</Button>
            </CardActions>
          </CardContent>
        </Form>
      </Formik>
    </Card>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
})

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginCard)
