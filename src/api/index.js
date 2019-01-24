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
var data = []
export const url = {
  fetch () {
    let defaultItems = []
    for (var i = 0; i < 10; i++) {
      defaultItems.push({
        id: Math.random(),
        title: `타이틀${i}`,
        original: `원본주소${i}`,
        short: 'temp...',
        timeStamp: new Date().getTime(),
      })
    }
    return new Promise(function (resolve, reject) {
      resolve({ list: defaultItems })
    })
  },
  create (item) {
    data.push(item)
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
