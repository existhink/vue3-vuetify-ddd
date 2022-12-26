import Keycloak from 'keycloak-js';

const KeycloakInit = async success => {
  const defaultConfig = {
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
    logout: {
      redirectUri: window.location.origin,
    },
    config: {
      realm: window.variables.authRealm,
      url: window.variables.authUrl,
      clientId: window.variables.authClient,
    },
  };

  const keycloakInstance = new Keycloak(defaultConfig.config);

  keycloakInstance.onAuthSuccess = () => {
    //
  };

  keycloakInstance.onAuthRefreshSuccess = () => {
    //
  };

  keycloakInstance.onTokenExpired = () => {
    keycloakInstance.updateToken(10);
  };

  keycloakInstance.init(defaultConfig.initOptions).then(authenticated => {
    if (authenticated) {
      success(keycloakInstance);
    }
  });
};

export default KeycloakInit;
