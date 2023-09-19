import Vue from 'vue'
import "reset-css"

import './plugins/axios'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
