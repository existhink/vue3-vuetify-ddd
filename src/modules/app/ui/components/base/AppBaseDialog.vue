<template>
  <VDialog :model-value="show" persistent max-width="400" v-bind="$attrs">
    <VCard>
      <slot />
    </VCard>
  </VDialog>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>
