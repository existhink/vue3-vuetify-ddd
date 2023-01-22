<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form class="form-group">
    <v-row class="my-0">
      <v-col cols="12" class="py-0">
        <AppFormGroup
          v-slot="attrs"
          :validator="validations.first_name"
          :name="localization('authentication.form.first_name')"
          name-as-label
        >
          <v-text-field
            v-model.trim="localForm.first_name"
            type="text"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.first_name')) }"
            v-on="listenerStateForm(validations, 'first_name')"
          />
        </AppFormGroup>
      </v-col>

      <v-col cols="12" class="py-0">
        <AppFormGroup
          v-slot="attrs"
          :validator="validations.last_name"
          :name="localization('authentication.form.last_name')"
          name-as-label
        >
          <v-text-field
            v-model.trim="localForm.last_name"
            type="text"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.last_name')) }"
            v-on="listenerStateForm(validations, 'last_name')"
          />
        </AppFormGroup>
      </v-col>

      <v-col cols="12" class="py-0">
        <AppFormGroup
          v-slot="attrs"
          :validator="validations.email"
          :name="localization('authentication.form.email')"
          name-as-label
        >
          <v-text-field
            v-model.trim="localForm.email"
            type="email"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.email')) }"
            v-on="listenerStateForm(validations, 'email')"
          />
        </AppFormGroup>
      </v-col>

      <v-col cols="12">
        <AppBaseLabel :text="localization('authentication.form.phone_number')" class="d-block" />
      </v-col>

      <v-col cols="2" class="py-0">
        <AppFormGroup v-slot="attrs" :validator="validations.phone_code">
          <v-text-field
            v-model.trim="localForm.phone_code"
            type="text"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.phone_code')) }"
            v-on="listenerStateForm(validations, 'phone_code')"
          />
        </AppFormGroup>
      </v-col>

      <v-col cols="10" class="py-0">
        <AppFormGroup v-slot="attrs" :validator="validations.phone">
          <v-text-field
            v-model.trim="localForm.phone"
            type="text"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.phone_number')) }"
            v-on="listenerStateForm(validations, 'phone')"
          />
        </AppFormGroup>
      </v-col>

      <v-col cols="6" class="py-0">
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

      <v-col cols="6" class="py-0">
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
import { defineEmits, defineProps, ref, watch, toRef } from 'vue';

// i18n
import { useI18n } from 'vue-i18n';

// Composable
import { useListenerForm, useBindStateForm } from '@/modules/app/composable/useValidateForm';

const props = defineProps({
  modelValue: {
    type: Object,
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

<style lang="scss">
form.form-group {
  min-height: 40vh;

  .v-text-field.custom-textfield {
    .v-field__append-inner {
      align-items: center;
      padding-top: 0;
    }
  }
}
</style>
