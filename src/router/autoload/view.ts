import { RouteRecordRaw } from 'vue-router';
import { env } from '@/utils/index';

const layouts = import.meta.glob('../layout/*.vue', {
  eager: true,
});
const views = import.meta.glob('../view/**/*.vue', {
  eager: true,
});
function getRoutes() {
  console.log(views);
  console.log(layouts);

  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteModule(file, module!);
    //   console.log(route);
    route.children = getChilren(route);
    layoutRoutes.push(route);
  });
  // console.log(layoutRoutes);

  return layoutRoutes;
}

//获取子路由
function getChilren(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    // console.log(file);
    // console.log(layoutRoute.name);

    if (file.includes(`../view/${layoutRoute.name as string}`)) {
      // 生成路由数组
      // console.log(file);

      const route = getRouteModule(file, module!);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteModule(file: string, module: { [key: string]: any }) {
  // const name = file.split('/').pop()?.split('.')[0];
  const name = file.replace(/.+layout\/|.+view\/|\.vue/gi, '');
  // console.log(module);
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;

  console.log(module);
  return Object.assign(route, module.default?.route);
}
//这里配置路由自动注册为可选项
const routes =
  env.VITE_ROUTE_AUTO === true ? getRoutes() : ([] as RouteRecordRaw[]);
// console.log(typeof routes);
export default getRoutes;
