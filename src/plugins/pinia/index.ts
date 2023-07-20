import { App } from 'vue';
import { createPinia } from 'pinia';
export default function setupPiniaPlugin(app: App) {
  app.use(createPinia());
}
