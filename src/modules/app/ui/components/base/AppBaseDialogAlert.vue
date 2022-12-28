<template>
  <VDialog :model-value="show" persistent max-width="400px">
    <VCard>
      <img v-if="actualIcon" :src="actualIcon" class="icon" alt="alert-icon" />
      <div class="text-center">
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
      </div>
      <div class="d-flex align-center justify-center pa-5">
        <VBtn :loading="okBtnLoading" color="primary" variant="flat" @click="onOk">
          {{ okBtnText }}
        </VBtn>
        <VBtn v-if="cancelBtnShow" :loading="cancelBtnLoading" variant="flat" @click="onCancel">
          {{ cancelBtnText }}
        </VBtn>
      </div>
    </VCard>
  </VDialog>
</template>

<script setup>
import iconSuccess from '@/modules/app/assets/icons/icon-success.svg';
import iconWarning from '@/modules/app/assets/icons/icon-warning.svg';
import { computed } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'success',
  },
  title: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
  okBtnText: {
    type: String,
    default: 'OK',
  },
  okBtnLoading: {
    type: Boolean,
    default: false,
  },
  cancelBtnShow: {
    type: Boolean,
    default: false,
  },
  cancelBtnText: {
    type: String,
    default: 'Cancel',
  },
  cancelBtnLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['ok', 'cancel']);

const actualIcon = computed(() => {
  if (props.type === 'success') return iconSuccess;
  if (props.type === 'warning') return iconWarning;
  return null;
});

const onOk = () => {
  emit('ok');
};

const onCancel = () => {
  emit('cancel');
};
</script>

<style lang="scss" scoped>
.icon {
  height: 200px;
}
</style>
