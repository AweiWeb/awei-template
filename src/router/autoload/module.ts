import { RouteRecordRaw } from 'vue-router';

export default function moduleLoadRoute() {
  const module: any = import.meta.glob('../modules/**/*.ts', {
    eager: true,
  });
  const routes = [] as RouteRecordRaw[];
  Object.keys(module).forEach((key) => {
    routes.push(module[key].default);
    console.log(module[key]);
  });
  console.log(module);
  return routes;
}
