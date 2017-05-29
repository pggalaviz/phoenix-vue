import Phoenix_html from 'phoenix_html'
import { Socket } from 'phoenix'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
