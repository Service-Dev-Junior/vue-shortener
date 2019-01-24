import Vue from 'vue'
import Router from 'vue-router'
import Shotener from './views/Shotener.vue'
import NShortener from './views/NShortener.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: NShortener
    },
  ]
})
