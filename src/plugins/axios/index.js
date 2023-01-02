// Lodash
import isEmpty from 'lodash/isEmpty';

// Axios
import axios from 'axios';

// Store
import { useAuthStore } from '@/modules/auth/store/auth.store';

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ? `${import.meta.env.VITE_APP_API_URL}/api` : '/api',
});

http.interceptors.request.use(async config => {
  const store = useAuthStore();
  const token = store.auth_token;
  if (!isEmpty(token)) {
    config.headers['Accept-Language'] = localStorage.getItem('lang') || 'en';
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
