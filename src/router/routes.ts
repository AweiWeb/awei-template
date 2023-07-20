import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/Home/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/auth/login.vue'),
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/view/error/404.vue'),
  },
] as RouteRecordRaw[];

export default routes;
