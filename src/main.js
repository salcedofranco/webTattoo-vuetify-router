import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nosotros', component: Nosotros },
    { path: '/contacto', component: Contacto },
    { path: '*', component: NotFound }
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
