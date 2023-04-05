<template>
  <label class="app-label" :class="classesCompute" v-bind="$attrs">
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <slot name="prepend" />
      {{ text }}
      <slot name="append" />
    </template>
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  fontSize: {
    type: String,
    default: '13px',
  },
  bold: {
    type: Boolean,
    default: true,
  },
  italic: {
    type: Boolean,
    default: false,
  },
  noGutter: {
    type: Boolean,
    default: false,
  },
  gutterSize: {
    type: String,
    default: 'mb-2',
  },
});

const classesCompute = computed(() => {
  const classes = ['d-block'];

  if (props.bold) classes.push('font-weight-bold');
  if (props.italic) classes.push('font-italic');
  if (!props.noGutter) classes.push(props.gutterSize);

  return classes;
});
</script>

<style lang="scss" scoped>
.app-label {
  font-size: v-bind(fontSize);
  color: #383838;
}
</style>
