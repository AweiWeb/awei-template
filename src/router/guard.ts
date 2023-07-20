import { cacheToken } from '@/enum/cacheData';
import { userStore } from '@/store/user';
import { MenuRouter } from '@/store/menu';
import { store } from '@/utils';
// import { initData } from '@/utils/store';
import { RouteLocationNormalized, Router } from 'vue-router';
class Guard {
  constructor(private router: Router) {}
  public run() {
    //   这里写next页面会空白
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    //   路由前置守卫
    // console.log(to.meta);
    if (this.isLogin(to) === false) {
      return { name: 'login' };
    }
    /*
     *从哪来回哪去
     */
    if (this.isGuest(to) === false) {
      return from;
    }
    await this.getUserInfo();
    // 记录路由要去哪里
    // MenuRouter().addHistoryMenu(to);
  }
  private getUserInfo() {
    if (this.token()) {
      const storeA = userStore();
      storeA.getInfo();
    }
  }
  private isLogin(route: RouteLocationNormalized): boolean {
    console.log(Boolean(!route.meta.auth));
    const state = Boolean(
      !route.meta.auth || (route.meta.auth && this.token())
    );
    if (state === false) {
      store.set(cacheToken.ROUTE_KEY_NAME, route.name);
    }
    return state;
  }
  private token(): string | null {
    return store.get(cacheToken.TOKEN_NAME)?.token;
  }
  /*
   *游客拦截
   */
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (!route.meta.guest && !this.token()));
  }
}
export default (router: Router) => {
  new Guard(router).run();
};
