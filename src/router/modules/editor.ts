import { RouteRecordRaw } from 'vue-router';
export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layout/admin.vue'),
  meta: {
    auth: true,
    menu: { title: 'editor', icon: 'fab fa-docker', isActive: false },
  },
  children: [
    {
      name: 'editor.markdown',
      path: 'markdown',
      component: () => import('@/view/editor/markdown.vue'),
      meta: { menu: { title: 'markdown' }, permissions: 'abc' },
    },
    {
      name: 'editor.base',
      path: 'base',
      component: () => import('@/view/editor/base.vue'),
      meta: {
        menu: { title: 'base' },
      },
    },
  ],
} as RouteRecordRaw;
