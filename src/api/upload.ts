import { http } from '@/plugins/axios/index';

interface img {
  url: string;
}
export async function uploadImg(data: FormData) {
  return http.request<img>({
    url: '/upload/img',
    method: 'post',
    data,
  });
}
