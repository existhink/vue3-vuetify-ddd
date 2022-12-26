<template>
  <div class="d-flex align-md-center justify-md-space-between">
    <!-- @Todo-->
    <div>Table Information</div>

    <VPagination
      :model-value="1"
      :length="9"
      :total-visible="7"
      :disabled="loading"
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
