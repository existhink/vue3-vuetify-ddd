<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form class="form-group mt-4 mt-md-8 mt-md-12">
    <v-row>
      <v-col cols="12">
        <AppFormGroup v-slot="attrs" :validator="validations.email" name="Email" name-as-label>
          <v-text-field
            v-model="localForm.email"
            type="email"
            bg-color="white"
            v-bind="{ ...attrs, ...bindStateForm(localization('authentication.form.placeholder.email')) }"
            v-on="listenerStateForm(validations, 'email')"
          />
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

const localForm = ref({});

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
  min-height: 40vh;
}
</style>
