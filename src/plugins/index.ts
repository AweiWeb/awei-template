import { App } from 'vue';
import { setupTailwindcss } from './tailwindcss';
import setupElementPlugin from './element';
import setupPiniaPlugin from './pinia';
export function setupPlugin(app: App) {
  setupPiniaPlugin(app);
  setupTailwindcss();
  setupComponentPlugin(app);
  setupElementPlugin(app);
}

/*
 *自动注册全局组件
 */
function setupComponentPlugin(app: App) {
  const components: any = import.meta.glob('../components/form/*.vue', {
    eager: true,
  });
  // console.log(components);
  Object.keys(components).forEach(async (key) => {
    // console.log(components[key]);
    // console.table(key.split('/').pop()?.split('.').shift());
    // 截取名字
    const name = key.split('/').pop()?.split('.').shift() as string;
    app.component(name, components[key].default);
  });
}
