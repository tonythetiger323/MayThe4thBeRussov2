import React from 'react'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components'
import API from '../../utils/API'
import { withSnackbar } from 'notistack'

const messageValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  message: Yup.string().required('Message is required')
})

const initialValues = {
  name: '',
  message: ''
}

interface MessageDialogState {
  open: boolean
}

class MessageDialog extends React.Component<any, MessageDialogState> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const reloadPage = () => {
      window.location.reload()
    }

    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <Button
            style={{ fontFamily: 'Oswald' }}
            variant="outlined"
            size="small"
            onClick={this.handleClickOpen}
          >
            Post a Message
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="login-form-dialog-title"
          >
            <DialogTitle id="login-form-dialog-title">
              Post a Message
            </DialogTitle>
            <DialogContent>
              <Formik
                initialValues={initialValues}
                validationSchema={messageValidationSchema}
                validateOnChange
                onSubmit={async (values, { resetForm }) => {
                  const res = await API.submitMessage(values)
                  if (res.status === 200) {
                    this.props.enqueueSnackbar('Message Posted!', {
                      variant: 'success',
                      preventDuplicate: true,
                      autoHideDuration: 5000
                    })
                  } else {
                    this.props.enqueueSnackbar('Message Failed to Post!', {
                      variant: 'error',
                      preventDuplicate: true,
                      autoHideDuration: 5000
                    })
                    resetForm()
                    reloadPage()
                  }
                }}
              >
                <Form>
                  <Field
                    required
                    name="name"
                    label="Name"
                    type="text"
                    component={TextField}
                  />
                  <Field
                    required
                    name="message"
                    label="Message"
                    multiline
                    rowsMax="5"
                    component={TextField}
                  />
                  <Button onClick={this.handleClose}>Cancel</Button>
                  <Button onClick={this.handleClose} type="submit">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </DialogContent>
          </Dialog>
        </Grid>
      </div>
    )
  }
}

export default withSnackbar(MessageDialog)
