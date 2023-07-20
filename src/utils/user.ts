import { cacheToken } from '@/enum/cacheData.ts';
import { login } from '@/api/user';
import store from './store';
import router from '@/router';

export const loginUser = async (value: any) => {
  // console.log(value);
  const {
    result: { token },
  }: any = await login(value);
  // console.log(token);
  store.set(cacheToken.TOKEN_NAME, { token });
  // 这里就是在没有登录的情况下访问页面进行缓存
  // 然后保存访问的地址
  // 登录后直接进行跳转
  const RouteName = store.get(cacheToken.ROUTE_KEY_NAME) ?? 'home';
  router.push({ name: RouteName });
};

export function logout() {
  store.remove(cacheToken.TOKEN_NAME);
  router.push('/');
}
