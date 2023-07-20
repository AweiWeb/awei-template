import _ from 'lodash';
export function parseEnv(env: Record<string, any>): viteEnv {
  // lodash进行深拷贝
  const envs: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      // 深拷贝转化为boolean类型
      // 改变值类型
      envs[key] = value === 'true' ? true : false;
    }
    // 转化为数值类型
    else if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    } else if (value === 'null') {
      envs[key] = null;
    } else if (value === 'undefined') {
      envs[key] = undefined;
    } else {
      envs[key] = value;
    }
  });
  return envs;
}
