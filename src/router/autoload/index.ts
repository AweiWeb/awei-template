import { env } from '@/utils';
import getRoutes from './view';
import { RouteRecordRaw } from 'vue-router';
import moduleLoadRoute from './module';
let routes = [] as RouteRecordRaw[];
if (env.VITE_ROUTE_AUTO) {
  routes = getRoutes();
} else {
  routes = moduleLoadRoute();
}
export default routes;
