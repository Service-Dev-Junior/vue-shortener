import axios from 'axios'

const domain = 'http://localhost:3000'

const request = {
  get (path) {
    return axios.get(`${domain + path}`)
  },
  post (path, data) {
    return axios.post(`${domain + path}`, data)
  },
  delete (path) {
    return axios.delete(`${domain + path}`)
  },
  put (path, data) {
    return axios.put(`${domain + path}`, data)
  },
}

function isJson (obj) {
  var t = typeof obj
  return ['boolean', 'number', 'string', 'symbol', 'function'].indexOf(t) == -1
}

export const url = {
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
