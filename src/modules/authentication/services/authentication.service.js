// Vue
import { ref, computed, watch } from 'vue';

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

// Services
import { useAuthenticationDialogService } from '../services/dialog.service';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required, minLength, sameAs } from '@vuelidate/validators';

/**
 * @description Authentication Service
 *
 * @returns {Object} Object
 */
export const useAuthenticationService = () => {
  const store = useAuthenticationStore(); // Inheritance Store

  // Destructure
  const { httpAbort_registerAbort, httpAbort_clearAllRequest } = useHttpAbort();
  const {
    dialog,
    onOpenDialogSuccessForgotPassword,
    onOpenDialogSuccessLogin,
    onOpenDialogSuccessRegistration,
    onCloseDialogSuccessLogin,
  } = useAuthenticationDialogService();

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
  const authentication_passwordValidations = ref({
    isLengthValid: false,
    isContainNumber: false,
    isContainUppercase: false,
    isContainLowercase: false,
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

  // Define Validators
  const authentication_formLoginValidators = omit($v.value, [
    'first_name',
    'last_name',
    'phone_code',
    'phone',
    'confirm_password',
  ]);
  const authentication_formForgotPasswordValidators = omit($v.value, [
    'first_name',
    'last_name',
    'phone_code',
    'phone',
    'password',
    'confirm_password',
  ]);

  /**
   * @description Watch Value Password
   *
   * @return {void}
   */
  watch(
    () => formData.value.password,
    value => {
      const password = typeof value === 'string' ? value : '';
      authentication_passwordValidations.value.isLengthValid = password.length >= 8;
      authentication_passwordValidations.value.isContainNumber = /\d/g.test(password);
      authentication_passwordValidations.value.isContainUppercase = /[A-Z]/g.test(password);
      authentication_passwordValidations.value.isContainLowercase = /[a-z]/g.test(password);
    },
  );

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

  /**
   * @description Handle Submit - Authentication Forgot Password
   *
   * @return {void}
   */
  const authentication_onSubmitAuthenticationForgotPassword = async () => {
    try {
      await authentication_fetchAuthenticationForgotPassword();
      onOpenDialogSuccessForgotPassword();
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * @description Handle Submit - Authentication Login
   *
   * @return {void}
   */
  const authentication_onSubmitAuthenticationLogin = async () => {
    try {
      await authentication_fetchAuthenticationLogin();
      await authentication_fetchAuthenticationGetUser();
      onOpenDialogSuccessLogin();
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * @description Handle Submit - Authentication Register
   *
   * @return {void}
   */
  const authentication_onSubmitAuthenticationRegister = async () => {
    try {
      await authentication_fetchAuthenticationRegister();
      onOpenDialogSuccessRegistration();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    authentication_clearAllRequests: httpAbort_clearAllRequest,
    authentication_dialog: dialog,
    authentication_fetchAuthenticationForgotPassword,
    authentication_fetchAuthenticationGetUser,
    authentication_fetchAuthenticationLogin,
    authentication_fetchAuthenticationRegister,
    authentication_formData: formData,
    authentication_formForgotPasswordValidators,
    authentication_formLoginValidators,
    authentication_formRegisterValidators: $v,
    authentication_isAuthenticationError,
    authentication_loading,
    authentication_onCloseDialogSuccessLogin: onCloseDialogSuccessLogin,
    authentication_onSubmitAuthenticationForgotPassword,
    authentication_onSubmitAuthenticationLogin,
    authentication_onSubmitAuthenticationRegister,
    authentication_passwordValidations,
    authentication_store: store,
  };
};
