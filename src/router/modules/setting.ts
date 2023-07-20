import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'setting',
  path: '/setting',
  component: () => import('@/layout/admin.vue'),
  meta: {
    menu: { title: 'setting', icon: 'fas fa-flask', isActive: false },
    auth: true,
  },
  children: [
    {
      name: 'setting.person',
      path: 'person',
      component: () => import('@/view/setting/person.vue'),
      meta: {
        menu: {
          title: 'person',
        },
      },
    },
    {
      name: 'setting.info',
      path: 'info',
      component: () => import('@/view/setting/info.vue'),
      meta: { menu: { title: 'info' } },
    },
  ],
} as RouteRecordRaw;
