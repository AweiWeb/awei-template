import { http } from '@/plugins/axios/index';

/*
 *这里async
 *在调用的时候使用await
 */
export async function info() {
  return http.request<User>({
    url: '/text',
    // method: 'get',
  });
}

export async function login(data: any) {
  return http.request<loginToken>({
    url: '/login',
    method: 'post',
    data,
  });
}
