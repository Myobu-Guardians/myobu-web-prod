import Vue from 'vue';
import App from './App.vue';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import './registerServiceWorker';
import router from './router';
import store from './store';

// ------------ css ----------
import './assets/css/bootstrap.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

import VueScrollTo from 'vue-scrollto';
import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import jQuery from 'jquery';
window.$ = jQuery;

Vue.use(VueScrollTo);
Vue.use(FlagIcon);

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
