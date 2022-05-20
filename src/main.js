import Vue from 'vue';
import App from './App.vue';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLanguage, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faMedium, faFacebook, faTelegramPlane, faTwitter, faReddit, faDiscord, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCompositionAPI from '@vue/composition-api'
import VueNotification from "@kugatsu/vuenotification";

library.add(faYoutube, faMedium, faFacebook, faLanguage, faTwitter, faTelegramPlane, faReddit,faDiscord, faInstagram, faTiktok, faPowerOff);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// ------------ css ----------
import './assets/css/bootstrap.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import '@vueform/slider/themes/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

import VueScrollTo from 'vue-scrollto';
import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import jQuery from 'jquery';
window.$ = jQuery;

Vue.use(VueScrollTo);
Vue.use(FlagIcon);
Vue.use(VueCompositionAPI)
Vue.use(VueNotification, {
  timer: 20,
  showLeftIcn: false
});

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


