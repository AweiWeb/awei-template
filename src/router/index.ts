import { App } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';
import { userStore } from '@/store/user';
// import layoutRoutes from './autoload';
import guard from './guard';
import autoload from './autoload';
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

// 注册挂载路由
export async function setupRouter(app: App) {
  const user = userStore();
  await user.getInfo()
  autoload(router);
  guard(router);
  app.use(router);
}
// console.log(routes);

export default router;
