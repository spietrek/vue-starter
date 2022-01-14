import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// Vuetify
import Vuetify from 'vuetify'

// Axios
import axios from 'axios'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
Vue.config.devtools = enableVueTools()

Vue.use(Vuetify)

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

function enableVueTools() {
  if (window.location.host.indexOf('localhost') >= 0) {
    // local dev
    return true
  } else if (window.location.host.indexOf('dev') >= 0) {
    // all dev slots including QA
    return true
  } else {
    // uat, staging, prod, custom domains
    return false
  }
}
