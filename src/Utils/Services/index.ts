import axios from 'axios'

export const callApi = () => {
  return axios.get<{results: any[]}>('https://randomuser.me/api/')
}
