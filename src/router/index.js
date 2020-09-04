import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },

    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },

    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
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

    component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue'),
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "History" */ '../views/History.vue'),
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Categories" */ '../views/Categories.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },

    component: () => import(/* webpackChunkName: "Record" */ '../views/Record.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
