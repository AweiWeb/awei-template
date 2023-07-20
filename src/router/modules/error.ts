import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layout/admin.vue'),
  meta: {
    menu: { title: 'error', icon: 'fas fa-e', isActive: false },
    auth: true,
  },
  children: [
    {
      name: 'error.404',
      path: '404',
      component: () => import('@/view/error/404.vue'),
      meta: {
        menu: {
          title: '404',
        },
      },
    },
    {
      name: 'error.403',
      path: '403',
      component: () => import('@/view/error/403.vue'),
      meta: { menu: { title: '403' } },
    },
    {
      name: 'error.401',
      path: '401',
      component: () => import('@/view/error/401.vue'),
      meta: { menu: { title: '401' } },
    },
  ],
} as RouteRecordRaw;
