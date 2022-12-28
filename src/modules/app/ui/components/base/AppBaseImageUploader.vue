<template>
  <div class="d-flex flex-column align-center">
    <div
      ref="areaUploaderRef"
      class="image-uploader text-center"
      :class="{ disabled, highlight: hasDrag }"
      @click="onFileInputClick"
    >
      <div v-if="!localFilePreview" class="image-uploader-placeholder">
        {{ thumbnailMessage }}
      </div>
      <img
        v-else
        :src="localFilePreview"
        :alt="localFilePreview"
        class="image-uploader-img"
        :style="{ objectFit: thumbnailCover ? 'cover' : 'contain' }"
      />

      <div v-if="hasFile && !disabled" class="image-uploader-action">
        <VBtn icon @click.stop="onFileClear">
          <VIcon>mdi-close</VIcon>
        </VBtn>
      </div>
      <input
        ref="fileUploaderRef"
        type="file"
        :accept="accept.map(a => `.${a}`).toString()"
        :disabled="disabled"
        @change="onFileChange"
      />
    </div>
    <v-btn
      v-if="!isThumbnail && withBtnUpload"
      color="primary"
      class="custom-button mt-3"
      :disabled="disabled"
      @click="onFileInputClick"
    >
      {{ uploadBtnText }}
    </v-btn>
    <small v-if="actualError" class="text-red-darken-4 mt-2">{{ actualError }}</small>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: File,
    default: null,
  },
  accept: {
    type: Array,
    default: () => ['jpg', 'png', 'gif', 'jpeg'],
  },
  thumbnail: {
    type: String,
    default: '',
  },
  isThumbnail: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledDragDrop: {
    type: Boolean,
    default: false,
  },
  withBtnUpload: {
    type: Boolean,
    default: false,
  },
  uploadBtnText: {
    type: String,
    default: 'Upload',
  },
  thumbnailMessage: {
    type: String,
    default: 'Upload Image',
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  thumbnailCover: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const localFile = ref(null);
const localFilePreview = ref(null);
const hasDrag = ref(false);
const localError = ref(null);

const areaUploaderRef = ref(null);
const fileUploaderRef = ref(null);

const hasFile = computed(() => Boolean(localFilePreview.value));
const actualError = computed(() => localError.value ?? props.errorMessages?.[0] ?? null);

watch(
  () => props.thumbnail,
  val => {
    localFilePreview.value = val;
  },
  { immediate: true },
);

const onValidateExtension = file => {
  const fileExt = file.name.split('.').pop();
  return props.accept.includes(fileExt.toLowerCase());
};

const onFileProcess = file => {
  localFile.value = file;
  localFilePreview.value = URL.createObjectURL(file);

  emit('update:modelValue', localFile.value);
  emit('change', { file: localFile.value, preview: localFilePreview.value });

  fileUploaderRef.value.value = null;
};

const onFileChange = e => {
  localError.value = null;
  const [file] = e?.dataTransfer?.files || e.target.files;
  if (!file) return;

  if (!onValidateExtension(file)) {
    localError.value = 'File extension not match';
    return;
  }

  onFileProcess(file);
};

const onFileInputClick = () => {
  fileUploaderRef.value.click();
};

const onFileClear = () => {
  localFile.value = null;
  localFilePreview.value = null;
  emit('update:modelValue', null);
};

const onEnterArea = () => {
  if (!props.disabledDragDrop) hasDrag.value = true;
};

const onLeaveArea = () => {
  hasDrag.value = false;
};

onMounted(() => {
  if (props.disabledDragDrop) return;

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    areaUploaderRef.value.addEventListener(eventName, e => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
  ['dragenter', 'dragover'].forEach(event => areaUploaderRef.value.addEventListener(event, onEnterArea));
  ['dragleave', 'drop'].forEach(event => areaUploaderRef.value.addEventListener(event, onLeaveArea));

  areaUploaderRef.value.addEventListener('drop', onFileChange);
});

onBeforeUnmount(() => {
  if (props.disabledDragDrop) return;

  ['dragenter', 'dragover'].forEach(event => areaUploaderRef.value.removeEventListener(event, onEnterArea));
  ['dragleave', 'drop'].forEach(event => areaUploaderRef.value.removeEventListener(event, onLeaveArea));

  areaUploaderRef.value.removeEventListener('drop', onFileChange);
});
</script>

<style lang="scss" scoped>
.image-uploader {
  position: relative;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid transparent;
  width: v-bind(width);
  height: v-bind(height);

  &.highlight {
    border: 2px solid blue;
    box-shadow: 0 1px 20px rgba(#ccc, 0.6);

    .image-uploader-placeholder {
      border-color: transparent;
    }
  }

  &.disabled {
    cursor: auto;
  }

  &:not(.disabled):hover {
    background: #f8f8f8;
  }

  &-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 10px;
    border: 1px solid #ccc;
    min-height: 80px;
    font-size: 12px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    background: #fefefe;
  }

  &-thumb {
    background: #000;
  }

  &-action {
    position: absolute;
    top: 5px;
    right: 5px;

    .v-btn {
      min-width: auto;
      padding: 0 10px;
    }
  }

  input[type='file'] {
    display: none;
  }
}
</style>
