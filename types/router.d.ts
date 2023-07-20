// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    /*
     *游客
     */
    guest?: boolean;
    // 权限
    permissions?: string[];
    // 子菜单
    menu?: IMenu;
  }
}
