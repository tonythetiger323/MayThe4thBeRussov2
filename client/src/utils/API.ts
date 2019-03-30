import axios from 'axios'

export default {
  registerUser: (userData: any) => {
    console.log(`Axios is making a POST request to '/api/users/register'`);
    console.log(`userData: ${userData}`);
    return axios.post('/api/users/register', userData)
  },

  loginUser: (userData: any) => {
    console.log(`Axios is making a POST request to 'api/auth/login'`);
    return axios.post('api/auth/login', userData)
  }
};
