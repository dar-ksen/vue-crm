import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },

    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Categories" */ '../views/Categories.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Categories" */ '../views/Detail.vue'),
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Categories" */ '../views/History.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
