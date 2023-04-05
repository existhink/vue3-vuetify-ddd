<template>
  <v-card class="app-base-card px-4 pt-5 pb-6">
    <div v-if="isUsingCardHeader" class="card-header w-100 h-fit-content">
      <slot name="card-header" />
    </div>

    <div class="card-body mt-7 mb-5">
      <slot name="card-body" />
    </div>

    <div v-if="isUsingCardFooter" class="card-footer">
      <slot name="card-footer" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AppBaseCard',
  props: {
    isUsingCardHeader: {
      type: Boolean,
      default: false,
    },
    isUsingCardFooter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.v-card {
  &.app-base-card {
    border: 1px solid #edebeb;
    box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.11);
    border-radius: 16px;
  }
}
</style>
