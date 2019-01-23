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

export const url = {
  fetch () {
    let urlItmes = []
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        urlItmes.push({
          'key': localStorage.key(i),
          'value': localStorage.getItem(localStorage.key(i))
        })
      }
    }
    return new Promise(function (resolve, reject) {
      resolve({ list: urlItmes })
    })
  },
  create (urlItem) {
    // 로컬 스토리지에 추가하는 로직
    let timestamp = new Date().getTime()
    localStorage.setItem(timestamp, urlItem)
    return new Promise(function (resolve, reject) {
      resolve()
    })
  },
  remove (urlItem) {
    localStorage.removeItem(urlItem.key)
    return new Promise(function (resolve, reject) {
      resolve()
    })
  },
  update (id, urlItem) {
    localStorage.setItem(urlItem.value, urlItem.value)
    return new Promise(function (resolve, reject) {
      resolve()
    })
  },
  destroy () {
    localStorage.clear()
    return new Promise(function (resolve, reject) {
      resolve()
    })
  },
}
