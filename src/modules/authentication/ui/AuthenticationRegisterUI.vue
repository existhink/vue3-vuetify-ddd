<template>
  <section id="authentication-forgot-password" class="h-100">
    <CardAuthentication
      :title="localization('authentication.register.title')"
      :subtitle="localization('authentication.register.subtitle')"
      is-using-router-link
      link-url="/authentication/login"
      text-link="Masuk"
    >
      <template #card-body>
        <AuthenticationFormRegister
          v-model="authentication_formData"
          :password-validations="authentication_passwordValidations"
          :validations="authentication_formRegisterValidators"
        />
      </template>

      <template #card-footer>
        <div class="d-flex flex-column gap-5 w-100">
          <v-btn
            color="white"
            class="bg-primary text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            block
            height="54"
            :loading="authentication_loading"
            @click="authentication_onSubmitAuthenticationRegister"
            >{{ localization('authentication.register.button') }}</v-btn
          >
        </div>
      </template>
    </CardAuthentication>

    <AppBaseDialogAlert v-bind="authentication_dialog" @ok="authentication_onCloseDialogSuccessLogin" />
  </section>
</template>

<script setup>
// Components
import AuthenticationFormRegister from './components/AuthenticationFormRegister.vue';
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
  authentication_formRegisterValidators,
  authentication_loading,
  authentication_onCloseDialogSuccessLogin,
  authentication_onSubmitAuthenticationRegister,
  authentication_passwordValidations,
} = useAuthenticationService();
</script>
