import { defineConfig, ConfigEnv, loadEnv } from 'vite';
import path from 'path';
import { parseEnv } from './vite/utils';
import setupPlugin from './vite/plugins';
import { visualizer } from 'rollup-plugin-visualizer';
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
    // 可视化打包的插件
    plugins: [...setupPlugin(isBuild, env), visualizer()],
    resolve: {
      alias: {
        // 配置引入别名
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          // 分块打包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
  };
};
