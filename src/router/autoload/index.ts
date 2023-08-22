import { env } from '@/utils';
import getRoutes from './view';
import { RouteRecordRaw, Router } from 'vue-router';
import moduleLoadRoute from './module';
import { userStore } from '@/store/user';
// if (env.VITE_ROUTE_AUTO) {
//   routes = getRoutes();
// } else {
//   routes = moduleLoadRoute();
// }
let routes: RouteRecordRaw[] = env.VITE_ROUTE_AUTO
  ? getRoutes()
  : moduleLoadRoute();
// 这里进行剔除权限之外的路由
function autoload(router: Router) {
  const user = userStore();
  console.log(user.info);

  routes = routes.map((route) => {
    // router.addRoute(route);
    route.children = route.children?.filter((child) => {
      const permission = child.meta?.permissions; //这里返回的是字符串
      // console.log(permission);
      return permission ? user.info?.permissions?.includes(permission) : true; //在用户返回的数据中提取数组对应的数据
    });
    console.log(route.children);

    return route;
  });
  routes.forEach((item) => router.addRoute(item));
}
export default autoload;
