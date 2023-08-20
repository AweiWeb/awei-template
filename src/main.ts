import { createApp } from 'vue';
import router, { setupRouter } from './router/index';
import './style.css';
import App from './App.vue';
import '@/styles/global.min.css';
import { setupPlugin } from './plugins';
const app = createApp(App);
async function RouterLoad() {
  setupPlugin(app);
  setupRouter(app);
  await router.isReady()
  app.mount('#app');
}
RouterLoad();
