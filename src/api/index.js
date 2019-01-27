import axios from 'axios'

const devDomain = 'http://localhost'
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
  test () {
    return request.post('shorten', {'url': 'asdasd'})
  },
  fetch () {
    let urlItmes = []
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        urlItmes.push({
          'key': localStorage.key(i),
          'value': JSON.parse(localStorage.getItem(localStorage.key(i)))
        })
      }
    }
    return new Promise(function (resolve, reject) {
      resolve({ list: urlItmes })
    })
  },
  create (id, item) {
    return new Promise(function (resolve, reject) {
      localStorage.setItem(id, JSON.stringify(item))
      resolve()
    })
  },
  remove (urlItem) {
    return new Promise(function (resolve, reject) {
      localStorage.removeItem(urlItem.key)
      resolve()
    })
  },
  update (id, urlItem) {
    return new Promise(function (resolve, reject) {
      localStorage.setItem(urlItem.value, urlItem.value)
      resolve()
    })
  },
  destroy () {
    return new Promise(function (resolve, reject) {
      localStorage.clear()
      resolve()
    })
  },
}
