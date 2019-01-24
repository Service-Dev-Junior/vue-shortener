const mutations = {
  SET_ITEMS (state, items) {
    state.list = items
  },
  SET_IS_SHOW_MODAL (state, toggle) {
    state.showModal = toggle
  },
}

export default mutations
