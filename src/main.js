import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import Vuex from 'vuex'
import VueCarousel from 'vue-carousel'

import accounting from 'accounting'
import pluralize from 'pluralize'
import App from './components/App'
import Home from './components/Home'
import Commerce from './components/shop/Commerce'
import Shop from './components/shop/Shop'
import store from './store/index.js'

Vue.use(VueRouter)
Vue.use(Resource)
Vue.use(VueCarousel)
Vue.use(Vuex)
Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

// const store = new.Vuex.Store({
//   state: {

//   }
// })
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/shop',
    component: Shop,
    name: 'shop'
  },
  {
    path: '/commerce',
    component: Commerce,
    name: 'commerce'
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
