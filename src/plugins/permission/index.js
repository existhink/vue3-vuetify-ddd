import { PERMISSION } from '@/modules/app/constants/permission.constant';
import { useAuthenticationStore } from '@/modules/authentication/store/authentication.store';

export function can(permission = '') {
  const store = useAuthenticationStore();
  const transformPermission = Array.isArray(permission) ? permission : [permission];
  return store.permissions.some(permission => transformPermission.includes(permission));
}

export default {
  install(app) {
    app.config.globalProperties.$permission = PERMISSION;

    app.config.globalProperties.$can = can;
  },
};
