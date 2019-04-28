import axios from 'axios'

export default {
  registerUser: (userData: any) => {
    console.log(`Axios is making a POST request to '/api/users/register'`)
    console.log(`userData: ${userData}`)
    return axios.post('/api/users', userData)
  },

  loginUser: (userData: any) => {
    console.log(`Axios is making a POST request to 'api/auth/login'`)
    return axios.post('/api/auth/login', userData)
  },

  submitRsvp: (rsvpData: any) => {
    console.log(`Axios is making a POST request to 'api/rsvps'`)
    return axios.post('/api/rsvps', rsvpData)
  },

  getMessages: () => {
    console.log(`Axios is making a GET request to 'api/messages'`)
    return axios.get('api/messages')
  },

  submitMessage: (messageData: any) => {
    console.log(`Axios is making a POST request to 'api/messages'`)
    return axios.post('/api/messages', messageData)
  },

  getRsvps: () => {
    console.log(`Axios is making a GET request to 'api/rsvps'`)
    return axios.get('/api/rsvps')
  }
}
