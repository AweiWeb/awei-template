import ElementUIPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { App } from 'vue';
export default function setupElementPlugin(app: App) {
  app.use(ElementUIPlus);
}
