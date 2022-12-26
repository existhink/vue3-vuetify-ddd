<template>
  <component :is="layout" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const layout = computed(() => {
  return (route.meta?.layout ?? 'empty') + '-layout';
});
</script>
