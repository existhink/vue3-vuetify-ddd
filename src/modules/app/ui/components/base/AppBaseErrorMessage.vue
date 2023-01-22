<template>
  <div class="base-error-message bg-lightDanger mt-3">
    <p class="text-caption text-danger font-weight-medium font-inter">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppBaseMessageError',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
div.base-error-message {
  width: fit-content;
  padding: 5px 8px 6px;
  border: 1px solid #ff647c;
  border-radius: 4px;

  .text-caption {
    font-size: 12px !important;
  }
}
</style>
