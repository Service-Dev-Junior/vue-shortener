import axios from 'axios'

const proDomain = 'http://wodn4131.cafe24.com/api/public/'

const request = {
  get (path) {
    return axios.get(`${proDomain + path}`)
  },
  post (path, data) {
    return axios.post(`${proDomain + path}`, data)
  },
  delete (path) {
    return axios.delete(`${proDomain + path}`)
  },
  put (path, data) {
    return axios.put(`${proDomain + path}`, data)
  },
}

export const url = {
  create (url) {
    return request.post('shortener', { url }).then(({ data }) => data)
  },
}
