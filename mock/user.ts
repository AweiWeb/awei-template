import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/text',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: '伟伟web',
          age: 22,
          avatar: '/public/awei.jpg',
          permissions: ['markDown', 'article']
        },
      };
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        typpe: 'success',
        result: {
          token: Random.string(),
        },
      };
    },
  },
] as MockMethod[];
