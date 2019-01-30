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
  fetch () {
    return request.get('shorteners').then(({ data }) => data)
  },
  create (title, url) {
    return request.post('shorteners', { title, url }).then(({ data }) => data)
  },
  remove (id) {
    return request.delete(`shortener/${id}`)
  },
}
