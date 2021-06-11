import Vue from 'vue';
import VueRouter from 'vue-router';

import Myobu from '../pages/indices/Myobu.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Myobu',
    component: Myobu,
    meta: { title: 'Myōbu | $MYOBU' }
  },
  {
    path: '*',
    name: 'catchAll',
    component: Myobu,
    meta: { title: 'Myōbu | $MYOBU' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.meta.anchor);
      if (element) {
        return window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title)
    document.title = to.meta.title;
  next();
});


export default router
