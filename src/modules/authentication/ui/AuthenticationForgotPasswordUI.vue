<template>
  <section id="authentication-forgot-password" class="h-100">
    <CardAuthentication
      :title="localization('authentication.forgot_password.title')"
      :subtitle="localization('authentication.forgot_password.subtitle')"
    >
      <template #card-body>
        <AuthenticationFormForgotPassword v-model="formData" :validations="validators" />
      </template>

      <template #card-footer>
        <div class="d-flex flex-column gap-5 w-100">
          <v-btn
            color="white"
            class="bg-primary text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            block
            height="54"
            @click="onSubmit"
            >{{ localization('authentication.forgot_password.button') }}</v-btn
          >

          <v-btn
            color="primary"
            class="bg-white text-uppercase text-subtitle-1 py-4 ml-0"
            rounded="pill"
            block
            height="54"
            >Kembali</v-btn
          >
        </div>
      </template>
    </CardAuthentication>

    <AppBaseDialogAlert v-bind="dialog" @ok="onCloseAlert" />
  </section>
</template>

<script>
// Components
import AuthenticationFormForgotPassword from './components/AuthenticationFormForgotPassword.vue';
import CardAuthentication from './components/CardAuthentication.vue';

// Lodash - Omit
import omit from 'lodash/omit';

// I18n
import { useI18n } from 'vue-i18n';

// Services
import { useAuthenticationService } from '../services/authentication.service';
import { useAuthenticationDialogService } from '../services/dialog.service';

export default {
  name: 'AuthenticationForgotPasswordUI',
  components: {
    AuthenticationFormForgotPassword,
    CardAuthentication,
  },
  setup() {
    const { t } = useI18n();
    const {
      authentication_formData,
      authentication_validators,
      authentication_fetchAuthenticationForgotPassword,
    } = useAuthenticationService();
    const { dialog, onOpenDialogSuccess } = useAuthenticationDialogService();
    const validators = omit(authentication_validators.value, [
      'first_name',
      'last_name',
      'phone_code',
      'phone',
      'password',
      'confirm_password',
    ]);

    const onSubmit = async () => {
      await authentication_fetchAuthenticationForgotPassword();
      onOpenDialogSuccess();
    };

    return {
      dialog,
      formData: authentication_formData,
      localization: t,
      onSubmit,
      validators,
    };
  },
};
</script>
