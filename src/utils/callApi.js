import axios from 'axios'

export default {
  getRequest (path, configs) {
    return axios.get(path, configs)
  }
}
