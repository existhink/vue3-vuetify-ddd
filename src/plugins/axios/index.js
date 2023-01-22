// Lodash
import isEmpty from 'lodash/isEmpty';

// Axios
import axios from 'axios';

// Store
import { useAuthenticationStore } from '@/modules/authentication/store/authentication.store';

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ? `${import.meta.env.VITE_APP_API_URL}/api` : '/api',
});

http.interceptors.request.use(async config => {
  const store = useAuthenticationStore();
  const token = store.authentication_token;
  if (!isEmpty(token)) {
    config.headers['Accept-Language'] = localStorage.getItem('lang') || 'id';
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

http.interceptors.response.use(undefined, err => {
  if (import.meta.env.DEV) {
    console.log('[HTTP Error]', err);
  }
  return Promise.reject(err);
});

export default http;
