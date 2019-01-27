import * as api from '../api'

const actions = {
  TEST_API ({ commit }) {
    return api.url.test().then(data => {

    })
  },
  FETCH_ITEMS ({ commit }) {
    return api.url.fetch().then(data => {
      commit('SET_ITEMS', data.list)
    })
  },
  ADD_URL ({ dispatch, state, commit }, { id, item }) {
    return api.url.create(id, item)
      .then(_ => {
        commit('SET_IS_SHOW_MODAL', false)
        dispatch('FETCH_ITEMS')
      })
  },
  UPDATE_URL ({ dispatch, state }, { id, title }) {
    return api.url.update(id, { id, title: newTitle })
      .then(() => dispatch('FETCH_ITEMS'))
  },
  DELETE_URL ({ dispatch, state }, { item }) {
    return api.url.remove(item)
      .then(() => dispatch('FETCH_ITEMS'))
  },
  CLEAR_URL ({ dispatch, state }) {
    return api.url.destroy()
      .then(() => dispatch('FETCH_ITEMS'))
  },
}

export default actions
