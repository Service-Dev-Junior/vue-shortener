import * as api from '../api'

const actions = {
  FETCH_ITEMS ({ commit }) {
    return api.url.fetch().then(res => {
      commit('SET_ITEMS', res.data.list)
    })
  },
  ADD_URL ({ dispatch, state, commit }, { title, url }) {
    return api.url.create(title, url)
      .then(res => {
        commit('SET_IS_SHOW_MODAL', false)
        dispatch('FETCH_ITEMS')
      })
  },
  DELETE_URL ({ dispatch, state }, { id }) {
    return api.url.remove(id)
      .then(_ => dispatch('FETCH_ITEMS'))
  },
}

export default actions
