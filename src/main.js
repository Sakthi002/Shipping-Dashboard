import 'es6-promise/auto'

import Vue from 'vue'

import VueRouter from 'vue-router'

import { sync } from 'vuex-router-sync'

import routes from './routes'

import AppView from './components/App.vue'

Vue.use(VueRouter)

// Routing logic
var router = new VueRouter({
  
  routes: routes,
  
  mode: 'history',
  
  linkExactActiveClass: 'active'
})

new Vue({

  el: '#root',

  router: router,

  render: h => h(AppView)
})
