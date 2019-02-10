import * as api from '../api'

const actions = {
  GET_SHORT_URL ({ dispatch, state, commit }, url) {
    commit('SET_IS_SHOW_ALERT', { type: 'info', message: '', toggle: false })
    return api.url.create(url)
  },
}

export default actions
