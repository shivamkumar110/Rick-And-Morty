import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://rickandmortyapi.com'
}

export default {
  getRequest (path, configs) {
    return axios.get(path, configs)
  }
}
