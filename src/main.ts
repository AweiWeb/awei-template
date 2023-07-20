import { createApp } from 'vue';
import router, { setupRouter } from './router/index';
import './style.css';
import App from './App.vue';
import '@/styles/global.min.css';
import { setupPlugin } from './plugins';
const app = createApp(App);
async function RouterLoad() {
  setupRouter(app);
  setupPlugin(app);
  app.mount('#app');
}
RouterLoad();
