import { viteMockServe } from 'vite-plugin-mock';
export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled: !isBuild, //能否使用mock模拟数据
  });
}
