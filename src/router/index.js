import Vue from 'vue';
import VueRouter from 'vue-router';

import Myobu from '../pages/indices/Myobu.vue';
import StakingPage from "@/pages/indices/StakingPage";
import StakingCreatePage from "@/pages/indices/StakingCreatePage";
import StakingCreatePageMyobuETHPage from "@/pages/indices/StakingCreatePageMyobuETHPage";
import StakingManagePage from "@/pages/indices/StakingManagePage";
import Hikari from "@/pages/indices/Hikari";
import StakingBSCPage from "@/pages/indices/StakingBSCPage";
import StakingBSCCreatePage from "@/pages/indices/StakingBSCCreatePage";
import StakingCreatePageMyobuBNBPage from "@/pages/indices/StakingCreatePageMyobuBNBPage";
import StakingBSCManagePage from "@/pages/indices/StakingBSCManagePage";
import StakingChoosePage from "@/pages/indices/StakingChoosePage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Myobu',
    component: Myobu,
    meta: { title: 'Myōbu | $MYOBU' }
  },
  {
    path: '/hikari',
    name: 'Hikari',
    component: Hikari,
    meta: { title: 'Hikari | $MYOBU' }
  },
  {
    path: '/staking',
    name: 'Staking',
    component: StakingChoosePage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking-eth',
    name: 'Staking',
    component: StakingPage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },  {
    path: '/staking-bsc',
    name: 'Staking',
    component: StakingBSCPage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/manage/:id',
    name: 'Staking',
    component: StakingManagePage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/bsc/manage/:id',
    name: 'Staking',
    component: StakingBSCManagePage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/stake/myobu',
    name: 'Staking',
    component: StakingCreatePage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/stake/myobu-bsc',
    name: 'Staking',
    component: StakingBSCCreatePage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/stake/myobu-eth',
    name: 'Staking',
    component: StakingCreatePageMyobuETHPage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '/staking/stake/myobu-wbnb',
    name: 'Staking',
    component: StakingCreatePageMyobuBNBPage,
    meta: { title: 'Staking | Myōbu | $MYOBU' }
  },
  {
    path: '*',
    name: 'catchAll',
    component: Myobu,
    meta: { title: 'Myōbu | $MYOBU' }
  }
]

const router = new VueRouter({
  // mode: 'history',
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