import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': '*',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Headers':
  //     'X-Requested-With,Content-Type,X-Token-Auth,Authorization',
  //   Accept: 'application/json',
  // },
});

export const axiosBlog = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BLOG_BASE_URL,
});
