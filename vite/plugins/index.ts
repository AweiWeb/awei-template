import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
import { setupMockPlugin } from './mock';
export default function setupPlugin(isBuild: boolean, env: viteEnv) {
//   console.log(import.meta.env);

  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  return plugins;
}
 