import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import API from '../../utils/API'

interface Message {
  id: string;
  message: string;
  name: string;
}

interface GuestBookMessagesState {
  messages: Message[]
}

class GuestBookMessages extends React.Component<any, GuestBookMessagesState> {
  constructor(props: any) {
    super(props)
      
      this.state = {
        messages: []
      }
  }

  async componentDidMount(){
    const res = await API.getMessages();
    console.log(res.data);
    this.setState({ messages: res.data })
  }

  render(){
    const messages = this.state.messages
    console.log(messages);
    return(
      <div className='messages'>
        { messages && messages.map(toCard) }
      </div>
    )
  }
}

const toCard = (message: Message) => {
  return(
    <div key={message.id} className='message'>
      <Card style={{ width: 300, opacity: 0.6 }}>
        <CardContent>
          <Typography style={{ fontFamily: 'Oswald' }} variant='h6' align='center'>{message.message}</Typography>
          <Typography style={{ fontFamily: 'Oswald' }} variant='body1' align='center'>{message.name} </Typography>
        </CardContent>
      </Card>
      <br/>
    </div>
  )
}

export default GuestBookMessages