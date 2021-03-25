import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Controls from './components/Controls.vue'
import Humidity from './components/Humidity'
import Temperature from './components/Temperature'
import Moisture from './components/Moisture'

Vue.component('banner', Header);
Vue.component('controls', Controls);
Vue.component('humidity', Humidity);
Vue.component('moisture', Moisture);
Vue.component('temperature', Temperature);

new Vue({
  el: '#app',
  render: h => h(App)
})
