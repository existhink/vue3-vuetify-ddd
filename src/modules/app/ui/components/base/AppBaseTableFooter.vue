<template>
  <div class="d-flex flex-column flex-md-row align-md-center justify-md-space-between mt-3">
    <!-- @Todo-->
    <div>Table Information</div>

    <VPagination
      :model-value="1"
      :length="9"
      :total-visible="7"
      :disabled="loading"
      density="compact"
      class="custom-pagination"
      @update:model-value="onChangePagination"
    />
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['change']);

const onChangePagination = page => {
  emit('change', { page });
};
</script>

<style scoped></style>
