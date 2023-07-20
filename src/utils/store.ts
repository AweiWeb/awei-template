export interface initData {
  expire?: number;
  [key: string]: any;
}
/*
 *localStorage的工具函数
 */
export default {
  /*
   *存储数据判断时间
   */
  set(key: string, data: any, expire?: number): void {
    let cache: initData = { data };
    if (expire) {
      cache.expire = new Date().getTime() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  /*
   *获取数据判断时间 判断时间是否小于现在的时间
   *设置过期时间再进行比较
   */
  get(key: string): any {
    const item = localStorage.getItem(key);
    if (item) {
      const cache = JSON.parse(item);
      const expire = cache?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
    return null;
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
