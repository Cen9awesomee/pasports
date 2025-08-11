import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VTooltip from 'v-tooltip';
import VueCountUp from 'vue-countup-v2';
import './assets/styles.css';
import '@/assets/fontawesome-pro/css/fontawesome.min.css';
import '@/assets/fontawesome-pro/css/fontawesome.css';
import '@/assets/fontawesome-pro/css/brands.min.css';
import '@/assets/fontawesome-pro/css/brands.css';
import '@/assets/fontawesome-pro/css/solid.min.css';
import '@/assets/fontawesome-pro/css/solid.css';
import '@/assets/fontawesome-pro/css/regular.min.css';
import '@/assets/fontawesome-pro/css/regular.css'; 


Vue.use(VTooltip, {
  disposeTimeout: 500000000000
});
Vue.use(VueCountUp);
Vue.use(VueApexCharts);
Vue.component('ApexChart', VueApexCharts);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
