import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/upload/img',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        result: {
          url: 'assets/1.jpg',
        },
      };
    },
  },
] as MockMethod[];
