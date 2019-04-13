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

  getComments: () => {
    console.log(`Axios is making a get request to 'api/comments'`)
    return axios.get('api/comments')
  }
}
