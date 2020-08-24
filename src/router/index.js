import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Help from '../views/Help';
import Setting from '../views/Setting';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
