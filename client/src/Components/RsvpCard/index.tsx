import * as React from 'react';
import * as Yup from 'yup';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { Select } from 'material-ui-formik-components';
import API from '../../utils/API'

const rsvpValidationSchema = Yup.object({
  rsvp: Yup.string().required('RSPV selection is required.'),
  guests: Yup.number().required('Number of guests selection is required.').integer().positive(),
  cars: Yup.number().required('Number of cars selection is required').integer()
});

const initialValues = {
  rsvp: '',
  guests: '',
  cars: ''
}

const RsvpCard = () => {
  return(
    <Card>
      <CardHeader>RSVP</CardHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={rsvpValidationSchema}
          validateOnChange
          onSubmit={async values => {
            await API.submitRsvp(values)
          }
        }
        >
          <Form>
            <CardContent>
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
                  { value: 6, label: '6' },
                  { value: 7, label: '7' },
                  { value: 8, label: '8' },
                  { value: 9, label: '9' },
                  { value: 10, label: '10'}
                ]}
                component={Select}
              />
              <Field
                required
                name='cars'
                label='Number of Cars'
                options={[
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' },
                  { value: 4, label: '4' },
                  { value: 5, label: '5' },
                  { value: 6, label: '6' },
                  { value: 7, label: '7' },
                  { value: 8, label: '8' },
                  { value: 9, label: '9' },
                  { value: 10, label: '10'}
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
