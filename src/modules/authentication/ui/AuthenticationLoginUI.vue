<template>
  <section id="authentication-login" class="h-100">
    <CardAuthentication
      :title="localization('authentication.login.title')"
      :subtitle="localization('authentication.login.subtitle')"
    >
      <template #card-body>
        <AuthenticationFormLogin
          v-model="authentication_formData"
          :validations="authentication_formLoginValidators"
          :is-error="authentication_isAuthenticationError"
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
            @click="authentication_onSubmitAuthenticationLogin"
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

    <AppBaseDialogAlert v-bind="authentication_dialog" @ok="authentication_onCloseDialogSuccessLogin" />
  </section>
</template>

<script setup>
// Components
import AuthenticationFormLogin from './components/AuthenticationFormLogin.vue';
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
  authentication_formLoginValidators,
  authentication_isAuthenticationError,
  authentication_loading,
  authentication_onCloseDialogSuccessLogin,
  authentication_onSubmitAuthenticationLogin,
} = useAuthenticationService();
</script>
