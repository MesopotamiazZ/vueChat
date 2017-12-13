import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
// 粒子效果
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(iview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
