// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Dinero from './components/VDinero';
import Dinerofy from './dinerofy'

const VDinero = {
  install (Vue, options) {
    Vue.component('v-dinero', Dinero)
    Vue.filter('dinerofy', function (val) {
      return Dinerofy(val, options)
    })
  }
}

export default VDinero;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VDinero)
}
