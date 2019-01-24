import Vue from 'vue'
import Router from 'vue-router'
import Shortener from './views/Shortener.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Shortener
    },
  ]
})
