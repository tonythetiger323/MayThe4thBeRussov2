import React from 'react';
import * as Yup from 'yup';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'material-ui-formik-components';
import API from '../../utils/API'
import { useSnackbar } from 'notistack'

const rsvpValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email().required('Email address is required'),
  rsvp: Yup.string().required('RSPV selection is required.'),
  guests: Yup.number().min(1).max(6).required('Number of guests selection is required.').integer().positive(),
  cars: Yup.number().min(0).max(2).required('Number of cars selection is required').integer()
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  rsvp: '',
  guests: '',
  cars: ''
}

const RsvpCard = () => {
  const { enqueueSnackbar } = useSnackbar();        
  return(
    <Card style={{opacity: 0.6}}>
      <CardHeader>RSVP</CardHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={rsvpValidationSchema}
          validateOnChange
          onSubmit={async function(values, { resetForm }){
            console.log(`Axios is making request to 'api/rsvps'`)
            const res = await API.submitRsvp(values)
            console.log(res);
            if(res.status === 200){
              enqueueSnackbar('Thank you, we have received your RSVP', { variant: 'success', preventDuplicate: true, autoHideDuration: 5000 })
            } else {
              enqueueSnackbar('Sorry, your RSVP was unsuccessful', { variant: 'error', preventDuplicate: true, autoHideDuration: 5000})
            }
            resetForm();
          }
        }
        >
          <Form>
            <CardContent>
              <Field
                required
                name='firstName'
                label='First Name'
                component={TextField}
              />
              <Field
                required
                name='lastName'
                label='Last Name'
                component={TextField}
              />
              <Field
                required
                name='email'
                label='Email'
                component={TextField}
              />
              <Field
                required
                name='rsvp'
                label='RSVP'
                options={[
                  { value: 'yes', label: 'Yes'},
                  { value: 'no', label: 'No'}
                ]}
                component={Select}
              />
              <Field
                required
                name='guests'
                label='Number of Guests'
                options={[
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' },
                  { value: 4, label: '4' },
                  { value: 5, label: '5' },
                  { value: 6, label: '6' }
                  ]}
                component={Select}
              />
              <Field
                required
                name='cars'
                label='Number of Cars'
                options={[
                  { value: 0, label: '0' },
                  { value: 1, label: '1' },
                  { value: 2, label: '2' }
                  ]}
                component={Select}
              />
            </CardContent>
            <CardActions>
              <Button type='submit'>Submit</Button>
            </CardActions>
          </Form>
        </Formik>
      </Card>
  )
}


export default RsvpCard
