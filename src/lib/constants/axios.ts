import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_BASE_URL);
export const axiosProtected = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers':
      'X-Requested-With,Content-Type,X-Token-Auth,Authorization',
    Accept: 'application/json',
  },
});
