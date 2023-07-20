import { defineStore } from 'pinia';
import { info } from '@/api/user';
export const userStore = defineStore('user', {
  state: () => {
    return {
      info: {} as User | null,
    };
  },
  actions: {
    async getInfo() {
      const res = await info();
      console.log(res.data);

      this.info = res.data;
    },
  },
});
