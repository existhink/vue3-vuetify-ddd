<template>
  <div :class="{ [gutterBottom]: !noGutter }">
    <AppBaseLabel v-if="nameAsLabel" :text="name" />
    <slot :error="invalid" :error-messages="errors" :placeholder="nameAsPlaceholder ? name : ''" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { VALIDATION_MESSAGE } from '@/modules/app/constants/validation.constant';

const props = defineProps({
  validator: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    default: 'Field',
  },
  noGutter: {
    type: Boolean,
    default: false,
  },
  gutterBottom: {
    type: String,
    default: 'mb-3',
  },
  nameAsLabel: {
    type: Boolean,
    default: false,
  },
  nameAsPlaceholder: {
    type: Boolean,
    default: false,
  },
});

const invalid = computed(() => props.validator.$dirty && props.validator.$invalid);

const errors = computed(() => {
  if (!invalid.value) {
    return [];
  }

  return props.validator.$errors.reduce((errors, error) => {
    const errorName = error?.$params?.type || error.$validator;
    errors.push(
      (VALIDATION_MESSAGE[errorName] ?? `Error : ${errorName}`)?.params({
        attribute: props.name,
        ...error.$params,
      }),
    );
    return errors;
  }, []);
});
</script>
