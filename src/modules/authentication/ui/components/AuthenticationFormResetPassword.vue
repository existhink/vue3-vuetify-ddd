<template>
  <form class="form-group mt-4 mt-md-8 mt-md-12">
    <v-row>
      <!-- Password Validations -->
      <v-col cols="12">
        <AppBasePasswordValidations :validations="passwordValidations" />
      </v-col>

      <!-- Password -->
      <v-col cols="12">
        <AppFormGroup
          v-slot="attrs"
          :validator="validations.password"
          :name="localization('authentication.form.password')"
          name-as-label
        >
          <v-text-field
            v-model.trim="localForm.password"
            :type="isOpenPassword ? 'text' : 'password'"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.password')) }"
            v-on="listenerStateForm(validations, 'password')"
          >
            <template #append-inner>
              <img :src="isOpenPassword ? iconOpenEye : iconCloseEye" alt="icon-eye" @click="onShowPassword" />
            </template>
          </v-text-field>
        </AppFormGroup>
      </v-col>

      <!-- Confirm Password -->
      <v-col cols="12">
        <AppFormGroup
          v-slot="attrs"
          :validator="validations.confirm_password"
          :name="localization('authentication.form.confirm_password')"
          name-as-label
        >
          <v-text-field
            v-model.trim="localForm.confirm_password"
            :type="isOpenConfirmPassword ? 'text' : 'password'"
            bg-color="white"
            v-bind="{
              ...attrs,
              ...bindStateForm(localization('authentication.form.placeholder.confirm_password')),
            }"
            v-on="listenerStateForm(validations, 'confirm_password')"
          >
            <template #append-inner>
              <img
                :src="isOpenConfirmPassword ? iconOpenEye : iconCloseEye"
                alt="icon-eye"
                @click="onShowConfirmPassword"
              />
            </template>
          </v-text-field>
        </AppFormGroup>
      </v-col>
    </v-row>
  </form>
</template>

<script setup>
// Vue
import { ref, watch, toRef } from 'vue';

// i18n
import { useI18n } from 'vue-i18n';

// Composable
import { useListenerForm, useBindStateForm } from '@/modules/app/composable/useValidateForm';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  passwordValidations: {
    type: Object,
    required: true,
    default: () => {},
  },
  validations: {
    type: Object,
    required: true,
    default: () => {
      return {};
    },
  },
});

const { t } = useI18n();
const localization = t;
const bindStateForm = useBindStateForm;
const listenerStateForm = useListenerForm;
const innerValue = toRef(props, 'modelValue');
const emit = defineEmits(['update:modelValue']);
const iconOpenEye = '/src/modules/app/assets/icons/icon-open-eye.svg';
const iconCloseEye = '/src/modules/app/assets/icons/icon-close-eye.svg';

const isOpenPassword = ref(false);
const isOpenConfirmPassword = ref(false);
const localForm = ref({});

const onShowPassword = () => {
  isOpenPassword.value = !isOpenPassword.value;
};

const onShowConfirmPassword = () => {
  isOpenConfirmPassword.value = !isOpenConfirmPassword.value;
};

watch(
  localForm,
  form => {
    emit('update:modelValue', form);
  },
  { deep: true },
);

watch(
  innerValue,
  form => {
    localForm.value = form;
  },
  { immediate: true, deep: true },
);
</script>

<style lang="scss" scoped>
form.form-group {
  min-height: 50vh;
}
</style>
