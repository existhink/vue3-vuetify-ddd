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
        <AuthenticationFormRegister v-model="formData" :validations="validators" />
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
            >{{ localization('authentication.register.button') }}</v-btn
          >
        </div>
      </template>
    </CardAuthentication>

    <AppBaseDialogAlert v-bind="dialog" @ok="onCloseDialogAlert" />
  </section>
</template>

<script>
// Components
import AuthenticationFormRegister from './components/AuthenticationFormRegister.vue';
import CardAuthentication from './components/CardAuthentication.vue';

// I18n
import { useI18n } from 'vue-i18n';

// Services
import { useAuthenticationService } from '../services/authentication.service';
import { useAuthenticationDialogService } from '../services/dialog.service';

export default {
  name: 'AuthenticationRegisterUI',
  components: {
    AuthenticationFormRegister,
    CardAuthentication,
  },
  setup() {
    const { t } = useI18n();
    const { authentication_formData, authentication_validators, authentication_fetchAuthenticationRegister } =
      useAuthenticationService();
    const { dialog, onOpenDialogSuccessRegistration, onCloseDialogSuccessRegistration } =
      useAuthenticationDialogService();

    const onSubmit = async () => {
      try {
        await authentication_fetchAuthenticationRegister();
        onOpenDialogSuccessRegistration();
      } catch (error) {
        console.error(error);
      }
    };

    return {
      dialog,
      formData: authentication_formData,
      localization: t,
      onSubmit,
      onCloseDialogAlert: onCloseDialogSuccessRegistration,
      validators: authentication_validators,
    };
  },
};
</script>
