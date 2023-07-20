import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'admin',
  path: '/admin',
  redirect: 'admin/home',
  component: () => import('@/layout/admin.vue'),
  meta: {
    auth: true,
    menu: { title: 'admin', icon: 'fab fa-angular', isActive: true },
  },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/view/admin/home.vue'),
      meta: { menu: { title: 'admin' } },
    },
  ],
} as RouteRecordRaw;
