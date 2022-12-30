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
  v: {
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

const invalid = computed(() => props.v.$dirty && props.v.$invalid);

const errors = computed(() => {
  if (!invalid.value) {
    return [];
  }

  return props.v.$errors.reduce((errors, error) => {
    errors.push(VALIDATION_MESSAGE[error.$params.type].params({ attribute: props.name, ...error.$params }));
    return errors;
  }, []);
});
</script>
