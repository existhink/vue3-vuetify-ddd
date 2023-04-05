<template>
  <section id="authentication-login" class="h-100">
    <CardAuthentication
      :title="localization('authentication.login.title')"
      :subtitle="localization('authentication.login.subtitle')"
    >
      <template #card-body>
        <AuthenticationFormLogin v-model="formData" :validations="validators" :is-error="isAuthenticationError" />
      </template>

      <template #card-footer>
        <div class="d-flex flex-column gap-5 w-100">
          <v-btn
            color="white"
            class="bg-primary text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            block
            height="54"
            :loading="isAuthenticationLoading"
            @click="onSubmit"
            >{{ localization('authentication.login.button') }}</v-btn
          >

          <router-link :to="{ name: 'authenticationRegister' }" class="text-decoration-none">
            <v-btn
              color="primary"
              class="bg-white text-uppercase text-subtitle-1 py-4 ml-0"
              rounded="pill"
              block
              height="54"
              >Daftar</v-btn
            >
          </router-link>
        </div>
      </template>
    </CardAuthentication>

    <AppBaseDialogAlert v-bind="dialog" @ok="onCloseDialogAlert" />
  </section>
</template>

<script>
// Components
import AuthenticationFormLogin from './components/AuthenticationFormLogin.vue';
import CardAuthentication from './components/CardAuthentication.vue';

// I18n
import { useI18n } from 'vue-i18n';

// Lodash - Omit
import omit from 'lodash/omit';

// Services
import { useAuthenticationService } from '../services/authentication.service';
import { useAuthenticationDialogService } from '../services/dialog.service';

export default {
  name: 'AuthenticationLoginUI',
  components: {
    AuthenticationFormLogin,
    CardAuthentication,
  },
  setup() {
    const { t } = useI18n();
    const {
      authentication_formData,
      authentication_validators,
      authentication_fetchAuthenticationGetUser,
      authentication_fetchAuthenticationLogin,
      authentication_isAuthenticationError,
      authentication_loading,
    } = useAuthenticationService();
    const { dialog, onOpenDialogSuccessLogin, onCloseDialogSuccessLogin } = useAuthenticationDialogService();

    const validators = omit(authentication_validators.value, [
      'first_name',
      'last_name',
      'phone_code',
      'phone',
      'confirm_password',
    ]);

    const onSubmit = async () => {
      try {
        await authentication_fetchAuthenticationLogin();
        await authentication_fetchAuthenticationGetUser();
        onOpenDialogSuccessLogin();
      } catch (error) {
        console.error(error);
      }
    };

    return {
      dialog,
      formData: authentication_formData,
      isAuthenticationLoading: authentication_loading,
      isAuthenticationError: authentication_isAuthenticationError,
      localization: t,
      onCloseDialogAlert: onCloseDialogSuccessLogin,
      onSubmit,
      validators,
    };
  },
};
</script>
