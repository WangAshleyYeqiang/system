import Vue from 'vue'
import "reset-css"

import './plugins/axios'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import './plugins/element.js'
import Vuex from 'vuex';
import VueCookies from 'vue-cookies'



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(VueCookies);

const store = new Vuex.Store({
  state: {
    userInfo: {
      userID:'',userName:'',userGender:'',userPhone:'',userSchool:'',userLastLoginTime:'',userCreateTime:'',userPassword:'',userPrivilege:'',userType:'',token:'',
    }
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    }
  }
});

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
