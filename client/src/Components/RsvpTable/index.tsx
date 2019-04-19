import React from 'react';
import API from '../../utils/API'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import theme from '../../theme/theme';
import { withStyles } from '@material-ui/core/styles'

interface Rsvp {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  rsvp: string;
  guests: number;
  cars: number;
}

interface RsvpTableState {
  rsvps: Rsvp[]
}

const styles = ({
  tableHead: {
    backgroundColor: theme.palette.primary.main
  }
})

class RsvpTable extends React.Component<any, RsvpTableState> {
  constructor(props: any) {
    super(props)

    this.state = {
      rsvps: []

    }
  }

  async componentDidMount(){
    const res = await API.getRsvps();
    console.log(res.data);
    this.setState({ rsvps: res.data })
  }

  render() {
    const rsvps = this.state.rsvps
    const { classes } = this.props
    return(
      <Paper>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>RSVP</TableCell>
              <TableCell>Guests</TableCell>
              <TableCell>Cars</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rsvps.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.rsvp}</TableCell>
                <TableCell>{row.guests}</TableCell>
                <TableCell>{row.cars}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(RsvpTable)