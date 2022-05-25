import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VAnimateCss from "v-animate-css";
import VueScrollTo from 'vue-scrollto';
import {firestorePlugin} from 'vuefire'
import App from './App.vue'
import "@/assets/css/global.css";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(firestorePlugin)
Vue.use(VAnimateCss)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
