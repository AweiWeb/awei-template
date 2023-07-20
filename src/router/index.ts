import { App } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';
import layoutRoutes from './autoload';
import guard from './guard';
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
});

// 注册挂载路由
export function setupRouter(app: App) {
  app.use(router);
  guard(router);
}
// console.log(routes);

export default router;
