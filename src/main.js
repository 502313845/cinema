import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mui from 'mint-ui'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(mui)

import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
