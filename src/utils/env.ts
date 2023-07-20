import _ from 'lodash';
class Helper {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }
  private getEnvs(): ImportMetaEnv {
    const envs: any = _.cloneDeep(import.meta.env);
    Object.entries(import.meta.env as Record<string, any>).forEach(
      ([key, value]) => {
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
      }
    );
    return envs;
  }
}

const helper = new Helper();
export default helper;

const env = helper.env;
export { env };
