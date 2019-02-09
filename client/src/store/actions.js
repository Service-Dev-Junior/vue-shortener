import * as api from '../api'

const actions = {
  GET_SHORT_URL ({ dispatch, state, commit }, url) {
    commit('SET_')
    return api.url.create(url)
      .then(response => {
        commit('SET_IS_SHOW_MODAL', false)

      })
  },
}

export default actions
