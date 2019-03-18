import * as React from 'react'
import Typography from '@material-ui/core/Typography'

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <Typography align='center' variant='h2'>
          Contact Us
        </Typography>
        <br />
        <br />
        <Typography align='center' variant='h4'>
          Questions? Use the form below to send us a message and we will get
          back to you at our ealiest convenience!
        </Typography>
      </div>
    );
  }
}

export default ContactUs;
