import { inject } from 'vue';

const useKeycloak = () => {
  const keycloak_instance = inject('keycloak');

  const keycloak_getToken = () => {
    return keycloak_instance.token;
  };

  const keycloak_onLogout = () => {
    keycloak_instance.logout();
  };

  return {
    keycloak: keycloak_instance,
    keycloak_getToken,
    keycloak_onLogout,
  };
};

export default useKeycloak;
