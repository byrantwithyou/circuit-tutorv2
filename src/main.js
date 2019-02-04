import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./route"
import VueGoogleCharts from "vue-google-charts";

Vue.config.productionTip = false
Vue.use(VueGoogleCharts);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
