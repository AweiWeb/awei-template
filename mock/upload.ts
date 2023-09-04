import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/upload/img',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        data: {
          url: 'assets/1.jpg',
        },
      };
    },
  },
] as MockMethod[];
