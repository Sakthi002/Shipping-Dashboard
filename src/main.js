import 'es6-promise/auto'

import Vue from 'vue'

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import VueRouter from 'vue-router'

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
