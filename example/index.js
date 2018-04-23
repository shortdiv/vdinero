import Vue from 'vue';
import App from './App.vue';
import VDinero from '../src/main';

Vue.config.productionTip = false;
Vue.use(VDinero, {
  currency: 'euro',
  format: 'international',
  prefix: true,
  precision: 2,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
