import { defineStore } from 'pinia';
import router from '@/router';
import { RouteLocationNormalized } from 'vue-router';
import { store } from '@/utils/index';
import { cacheToken } from '@/enum/cacheData';
export const MenuRouter = defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenus: [] as IMenu[],
    };
  },
  actions: {
    // 初始化方法
    init() {
      this.historyMenus = store.get(cacheToken.MENU_HIST) ?? [];
      console.log(this.menus);
    },

    // 获取历史菜单
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.menu) return;
      let Hmenu: IMenu = { ...route.meta.menu, route: route.name as string };
      // 这里需要去重
      let isHas = this.historyMenus.some((item) => item.route === route.name);
      if (!isHas) {
        this.historyMenus.unshift(Hmenu);
      }
      if (this.historyMenus.length > 10) {
        // 超过10个后面弹出
        this.historyMenus.pop();
      }
      //数据的持久化存储
      store.set(cacheToken.MENU_HIST, this.historyMenus);
    },
    // 删除菜单
    removeMenu(menu: IMenu) {
      const index = this.historyMenus.indexOf(menu);
      this.historyMenus.splice(index, 1);
    },
  },
});
