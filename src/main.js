import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
