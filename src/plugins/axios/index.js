import axios from 'axios';
import { useAuthStore } from '@/modules/auth/store/auth.store';

const http = axios.create({
  baseURL: window.variables.apiUrl,
});

http.interceptors.request.use(async config => {
  if (window.variables.keycloakEnable) {
    const store = useAuthStore();
    const token = store.auth_token;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
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
