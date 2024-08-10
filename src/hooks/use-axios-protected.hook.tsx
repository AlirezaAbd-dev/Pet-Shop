import axios from 'axios';
import { useEffect } from 'react';

import { useAuthStore } from '@/store/auth.store';

import useRefreshTokenMutation from './react-query/mutations/refresh-token.mutation';

const axiosProtected = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosProtected = () => {
  const { mutateAsync: refresh } = useRefreshTokenMutation();

  const accessToken = useAuthStore((s) => s.accesstoken);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  useEffect(() => {
    const requestIntercept = axiosProtected.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseIntercept = axiosProtected.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const localToken = localStorage.getItem('refresh-token') || undefined;
          const newAccessToken = await refresh({ refresh: localToken });
          setAccessToken(newAccessToken.data.access);
          prevRequest.headers['Authorization'] =
            `Bearer ${newAccessToken.data.access}`;
          return axiosProtected(prevRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosProtected.interceptors.request.eject(requestIntercept);
      axiosProtected.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken]);

  return axiosProtected;
};

export default useAxiosProtected;
