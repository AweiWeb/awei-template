import { ref } from 'vue';
import router from '@/router';
import { store } from '@/utils';
import { cacheToken } from '@/enum/cacheData';
import { RouteLocationMatched, RouteLocationNormalized } from 'vue-router';
class Menu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);
  public close = ref(false);
  public route = ref(null as null | RouteLocationNormalized);
  constructor() {
    this.menus.value = this.getMenuRouter();
    this.history.value = store.get(cacheToken.MENU_HIST) ?? [];
    console.log(this.history.value);
  }
  toggleParent(menu: IMenu) {
    this.menus.value.forEach((b) => {
      b.isActive = false;
      if (b == menu) {
        b.isActive = true;
      }
    });
  }
  // 收缩菜单栏
  toggleMenu() {
    this.close.value = !this.close.value;
  }
  //获取路由菜单
  getMenuRouter() {
    return router
      .getRoutes()
      .filter((item) => item.children.length && item.meta.menu)
      .map((route) => {
        let menu: IMenu = { ...route.meta?.menu };
        menu.children = route.children
          .filter((i) => i.meta?.menu)
          .map((route) => {
            return { ...route.meta?.menu, route: route.name };
          }) as IMenu[];
        return menu;
      })
      .filter((v) => v.children?.length) as IMenu[];
  }
  // 菜单颜色高亮
  MenuHight(route: RouteLocationNormalized) {
    this.menus.value.forEach((v) => {
      v.isActive = false;
      v.children?.forEach((a) => {
        if (route.name === a.route) {
          v.isActive = true;
          a.isActive = true;
        }
      });
    });
  }
  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta.menu) return;
    this.route.value = route;
    let Hmenu: IMenu = { ...route.meta.menu, route: route.name as string };
    // 这里需要去重
    let isHas = this.history.value.some((item) => item.route === route.name);
    if (!isHas) {
      this.history.value.unshift(Hmenu);
    }
    if (this.history.value.length > 10) {
      // 超过10个后面弹出
      this.history.value.pop();
    }
    //数据的持久化存储
    store.set(cacheToken.MENU_HIST, this.history.value);
  }
  removeMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }
}

export default new Menu();
