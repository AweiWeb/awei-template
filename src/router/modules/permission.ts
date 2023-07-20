import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'permission',
  path: '/permission',
  component: () => import('@/layout/admin.vue'),
  meta: {
    menu: { title: 'permission', icon: 'fas fa-square-virus', isActive: false },
    auth: true,
  },
  children: [
    {
      name: 'permission.loadData',
      path: 'load',
      component: () => import('@/view/permission/loadData.vue'),
      meta: {
        menu: {
          title: 'load',
        },
      },
    },
    {
      name: 'permission.awei',
      path: 'awei',
      component: () => import('@/view/permission/awei.vue'),
      meta: { menu: { title: 'awei' } },
    },
  ],
} as RouteRecordRaw;
