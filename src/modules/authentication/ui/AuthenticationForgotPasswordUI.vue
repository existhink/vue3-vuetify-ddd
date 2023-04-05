<template>
  <section id="authentication-forgot-password" class="h-100">
    <CardAuthentication
      :title="localization('authentication.forgot_password.title')"
      :subtitle="localization('authentication.forgot_password.subtitle')"
    >
      <template #card-body>
        <AuthenticationFormForgotPassword
          v-model="authentication_formData"
          :validations="authentication_formForgotPasswordValidators"
        />
      </template>

      <template #card-footer>
        <div class="d-flex flex-column gap-5 w-100">
          <v-btn
            :loading="authentication_loading"
            color="white"
            class="bg-primary text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            block
            height="54"
            @click="authentication_onSubmitAuthenticationForgotPassword"
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

    <AppBaseDialogAlert v-bind="authentication_dialog" @ok="authentication_onCloseDialogSuccessLogin" />
  </section>
</template>

<script setup>
// Components
import AuthenticationFormForgotPassword from './components/AuthenticationFormForgotPassword.vue';
import CardAuthentication from './components/CardAuthentication.vue';

// I18n
import { useI18n } from 'vue-i18n';

// Services
import { useAuthenticationService } from '../services/authentication.service';

// Desctructure services
const { t } = useI18n();
const localization = t;
const {
  authentication_dialog,
  authentication_formData,
  authentication_formForgotPasswordValidators,
  authentication_loading,
  authentication_onCloseDialogSuccessLogin,
  authentication_onSubmitAuthenticationForgotPassword,
} = useAuthenticationService();
</script>
