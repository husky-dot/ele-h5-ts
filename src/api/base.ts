import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
  baseURL: '/api',
})

instance.interceptors.response.use((response) => {
  const { data: _data } = response
  const { data, code, msg } = _data
  console.log('_data', _data)
  if (code !== 0) {
    showDialog({
      message: msg,
    })
    return Promise.reject(msg)
  }
  return data
})

export default instance
