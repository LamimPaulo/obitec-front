import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import sweetalert from './plugins/sweetalert';
import Swal from 'sweetalert2';

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_URL, 

Vue.prototype.$swal = Swal;
Vue.use(VueAxios, axios, sweetalert)

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')