import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'

const RegistryCard = () => {
  return (
    <Card style={{ opacity: 0.6 }}>
      <CardContent>
        <br />
        <Typography
          variant="h4"
          align="center"
          style={{ fontFamily: 'Oswald' }}
        >
          Registry
        </Typography>
        <br />
        <br />
        <Divider variant="middle" />
        <br />
        <br />
        <Typography
          variant="h5"
          align="center"
          style={{ fontFamily: 'Oswald' }}
        >
          Honeyfund
        </Typography>
        <br />
        <br />
        <Typography variant="body1" align="center">
          <Link
            href="https://www.honeyfund.com/wedding/MayThe4thBeRusso"
            underline="none"
            color="inherit"
          >
            View Registry
          </Link>
        </Typography>
        <br />
        <br />
        <Divider variant="middle" />
        <br />
        <br />
        <Typography
          variant="h5"
          align="center"
          style={{ fontFamily: 'Oswald' }}
        >
          Bed Bath &amp; Beyond
        </Typography>
        <br />
        <br />
        <Typography variant="body1" align="center">
          <Link
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547312717?eventType=Wedding"
            underline="none"
            color="inherit"
          >
            View Registry
          </Link>
        </Typography>
        <br />
      </CardContent>
    </Card>
  )
}

export default RegistryCard
