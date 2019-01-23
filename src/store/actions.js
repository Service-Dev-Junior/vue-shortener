import * as api from '../api'

const actions = {
  FETCH_ITEMS ({ commit }) {
    return api.url.fetch().then(data => {
      commit('SET_ITEMS', data.list)
    })
  },
  ADD_URL ({ dispatch, state }, { originalUrl }) {
    return api.url.create(originalUrl)
      .then(() => dispatch('FETCH_ITEMS'))
  },
  UPDATE_URL ({ dispatch, state }, { id, title }) {
    return api.url.update(id, { id, title })
      .then(() => dispatch('FETCH_ITEMS'))
  },
  DELETE_URL ({ dispatch, state }, { item }) {
    console.log(item)
    return api.url.destroy(item)
      .then(() => dispatch('FETCH_ITEMS'))
  },

}

export default actions
