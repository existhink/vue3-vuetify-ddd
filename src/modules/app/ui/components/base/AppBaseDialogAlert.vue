<template>
  <VDialog :model-value="show" persistent max-width="400px" class="app-base-dialog-alert">
    <VCard>
      <img v-if="actualIcon" :src="actualIcon" class="icon" alt="alert-icon" />
      <div class="text-center">
        <h4 class="text-h6 font-weight-bold font-inter">{{ title }}</h4>
        <p class="text-subtitle-2 text-muted font-weight-regular font-inter mt-4">{{ description }}</p>
      </div>
      <v-row class="mt-5">
        <v-col :cols="cancelBtnShow ? 6 : 12">
          <v-btn
            :loading="okBtnLoading"
            color="primary"
            class="text-white text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            block
            height="54"
            @click="onOk"
            >{{ okBtnText }}</v-btn
          >
          <!-- <VBtn
            :loading="okBtnLoading"
            block
            color="primary"
            variant="flat"
            class="btn-primary py-5 text-uppercase text-subtitle-1 font-weight-regular"
            @click="onOk"
          >
            {{ okBtnText }}
          </VBtn> -->
        </v-col>
        <v-col v-if="cancelBtnShow" cols="6">
          <VBtn v-if="cancelBtnShow" block :loading="cancelBtnLoading" variant="flat" @click="onCancel">
            {{ cancelBtnText }}
          </VBtn>
        </v-col>
      </v-row>
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
  description: {
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

.v-dialog.app-base-dialog-alert {
  .v-card {
    background: #ffffff;
    border-radius: 36px;
    padding: 48px 52px;

    .btn-primary {
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 220px;
    }
  }
}
</style>
