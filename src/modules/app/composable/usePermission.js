import { can } from '@/plugins/permission';
import { PERMISSION } from '@/modules/app/constants/permission.constant';

const usePermission = () => {
  return {
    permission: PERMISSION,
    can: can,
  };
};

export default usePermission;
