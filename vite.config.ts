import { defineConfig, ConfigEnv, loadEnv } from 'vite';
import path from 'path';
import { parseEnv } from './vite/utils';
import setupPlugin from './vite/plugins';
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       // 配置引入别名
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });
export default ({ command, mode }: ConfigEnv) => {
  // console.log(command);
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  console.log(env);
  return {
    plugins: setupPlugin(isBuild, env),
    resolve: {
      alias: {
        // 配置引入别名
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
  };
};
