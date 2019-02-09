const mutations = {
  SET_IS_SHOW_SNACKBER (state, { toggle, message }) {
    state.isShowSnackbar = toggle
    state.snackbarMessage = message
  },
  SET_IS_SHOW_ALERT (state, { toggle, type, message }) {
    state.isShowAlert = toggle
    state.alertMessage = message
    state.alertType = type
  },
}

export default mutations
