import { defineStore } from 'pinia';
import http from '@/plugins/axios';
import {
  AUTHENTICATION_FORGOT_PASSWORD,
  AUTHENTICATION_GET_USER,
  AUTHENTICATION_LOGIN,
  MASTER_USER,
} from '../constants/authenticationApi.constant';

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    authentication_loading: false,
    authentication_token: null,
    authentication_user: {},
    permissions: ['DASHBOARD_READ'],
  }),
  getters: {},
  actions: {
    /**
     * @descripton Fetch Authentication - Login
     *
     * @url /user/login
     * @param {Object} payload
     * @param {Object} requestConfig
     * @method POST
     * @access public
     *
     * @return {Promise<any>} Promise<any>
     */
    async fetchAuthentication_loginAccount(payload, requestConfig) {
      try {
        this.authentication_loading = true;
        const response = await http.post(AUTHENTICATION_LOGIN, payload, { ...requestConfig });
        console.log(response.data.data, 'res');
        this.authentication_token = response.data.data.token;

        return Promise.resolve(response.data.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_loading = false;
      }
    },

    /**
     * @description Fetch Authentication - Register
     *
     * @url /user/register
     * @param {Object} payload
     * @param {Object} requestConfig
     * @method POST
     * @access public
     *
     * @return {Promise <any>} Promise<any>
     */
    async fetchAuthentication_registerAccount(payload, requestConfig) {
      try {
        this.authentication_loading = true;
        const response = await http.post(MASTER_USER, payload, { ...requestConfig });

        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_loading = false;
      }
    },

    /**
     * @description Fetch Authentication - Forgot Password
     *
     * @url /user/forgot-password
     * @param {Object} payload
     * @param {Object} requestConfig
     * @method POST
     * @access public
     *
     * @return {Promise <any>} Promise<any>
     */
    async fetchAuthentication_forgotPassword(payload, requestConfig) {
      try {
        this.authentication_loading = true;
        const response = await http.post(AUTHENTICATION_FORGOT_PASSWORD, payload, { ...requestConfig });

        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_loading = false;
      }
    },

    /**
     * @description Fetch Authentication - Get User Data
     *
     * @url /user/self
     * @param {Object} requestConfig
     * @method GET
     * @access private
     *
     * @return {Promise <any>} Promise<any>
     */
    async fetchAuthentication_getUserData(requestConfig) {
      try {
        this.authentication_loading = true;
        const response = await http.get(AUTHENTICATION_GET_USER, { ...requestConfig });
        this.authentication_user = response.data.data;

        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_loading = false;
      }
    },
  },
  persist: {
    enabled: true,
  },
});
