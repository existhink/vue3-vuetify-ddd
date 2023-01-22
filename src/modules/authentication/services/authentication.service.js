// Vue
import { ref, computed } from 'vue';

// Store / Pinia
import { useAuthenticationStore } from '@/modules/authentication/store/authentication.store';

// Composable
import useHttpAbort from '@/modules/app/composable/useHttpAbort';

// Constant
import {
  AUTHENTICATION_FORGOT_PASSWORD_REQUEST,
  AUTHENTICATION_LOGIN_REQUEST,
} from '../constants/authentication.constant';

// Lodash - Omit
import omit from 'lodash/omit';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required, minLength, sameAs } from '@vuelidate/validators';

export const useAuthenticationService = () => {
  const store = useAuthenticationStore(); // Inheritance Store
  const { httpAbort_registerAbort, httpAbort_clearAllRequest } = useHttpAbort(); // Destructure Composable

  // Reactive Data Binding
  const authentication_loading = store.authentication_loading;
  const authentication_isAuthenticationError = ref(false);
  const formData = ref({
    first_name: '',
    last_name: '',
    phone_code: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  // Form Validation
  const formRules = computed(() => ({
    first_name: { required },
    last_name: { required },
    phone_code: { required },
    phone: { required },
    email: { required },
    password: { required, minLength: minLength(8) },
    confirm_password: { required, minLength: minLength(8), sameAsPassword: sameAs(formData.value.password) },
  }));

  const $v = useVuelidate(formRules, formData, { $autoDirty: true });

  /**
   * @descripton Fetch Authentication - Login
   *
   * @return {Promise<any} Promise<any>
   */
  const authentication_fetchAuthenticationLogin = async () => {
    try {
      const payload = omit(formData.value, ['first_name', 'last_name', 'phone_code', 'phone', 'confirm_password']);

      const response = await store.fetchAuthentication_loginAccount(payload, {
        ...httpAbort_registerAbort(AUTHENTICATION_LOGIN_REQUEST),
      });

      return Promise.resolve(response);
    } catch (error) {
      authentication_isAuthenticationError.value = true;
      return Promise.reject(error);
    }
  };

  /**
   * @description Fetch Authentication - Register
   *
   * @return {Promise <any>} Promise<any>
   */
  const authentication_fetchAuthenticationRegister = async () => {
    try {
      const payload = omit(formData.value, ['confirm_password']);

      const response = await store.fetchAuthentication_registerAccount(payload, {
        ...httpAbort_registerAbort(AUTHENTICATION_LOGIN_REQUEST),
      });

      return Promise.resolve(response);
    } catch (error) {
      authentication_isAuthenticationError.value = true;
      return Promise.reject(error);
    }
  };

  /**
   * @description Fetch Authentication - Forgot Password
   *
   * @return {Promise <any>} Promise<any>
   */
  const authentication_fetchAuthenticationForgotPassword = async () => {
    try {
      const payload = omit(formData.value, [
        'first_name',
        'last_name',
        'phone_code',
        'phone',
        'password',
        'confirm_password',
      ]);

      const response = await store.fetchAuthentication_forgotPassword(payload, {
        ...httpAbort_registerAbort(AUTHENTICATION_FORGOT_PASSWORD_REQUEST),
      });

      return Promise.resolve(response);
    } catch (error) {
      authentication_isAuthenticationError.value = true;
      return Promise.reject(error);
    }
  };

  /**
   * @description Fetch Authentication - Get User
   *
   * @return {Promise <any>} Promise<any>
   */
  const authentication_fetchAuthenticationGetUser = async () => {
    try {
      const response = await store.fetchAuthentication_getUserData();

      return Promise.resolve(response);
    } catch (error) {
      authentication_isAuthenticationError.value = true;
      return Promise.reject(error);
    }
  };

  return {
    authentication_clearAllRequests: httpAbort_clearAllRequest,
    authentication_fetchAuthenticationForgotPassword,
    authentication_fetchAuthenticationGetUser,
    authentication_fetchAuthenticationLogin,
    authentication_fetchAuthenticationRegister,
    authentication_formData: formData,
    authentication_isAuthenticationError,
    authentication_loading,
    authentication_store: store,
    authentication_validators: $v,
  };
};
