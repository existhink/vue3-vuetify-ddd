<template>
  <div class="d-flex flex-column flex-sm-row justify-md-center align-md-center mb-6">
    <div class="mb-6 mb-md-0">
      <slot name="left" />
    </div>
    <VSpacer />
    <div v-if="!hideOptionList" class="d-flex align-center mb-2 mb-md-0">
      <AppBaseLabel text="Show" no-gutter />
      <VSelect v-model="localLimit" :items="optionList" :loading="loading" hide-details class="mx-3" />
      <AppBaseLabel text="Entries" no-gutter />
    </div>
    <VSpacer />
    <div v-if="!hideSearch" :style="searchStyled">
      <VTextField
        v-model="localSearch"
        placeholder="Search"
        autocomplete="off"
        max-length="255"
        hide-details
        clearable
        append-inner-icon="mdi-magnify"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import AppBaseLabel from '@/modules/app/ui/components/base/AppBaseLabel.vue';
import { useDebounce } from '@vueuse/core';
import { useDisplay } from 'vuetify';

defineProps({
  hideOptionList: {
    type: Boolean,
    default: false,
  },
  hideSearch: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  defaultOption: {
    type: Number,
    default: 10,
  },
  search: {
    type: String,
    default: null,
  },
  limit: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(['change']);
const optionList = [5, 10, 50, 100];
const localSearch = ref('');
const localSearchDebounced = useDebounce(localSearch, 400);
const localLimit = ref(10);

watch(localSearchDebounced, value => {
  emit('change', { search: value, page: 1 });
});

watch(localLimit, value => {
  emit('change', { limit: value, page: 1 });
});

const { smAndUp } = useDisplay();
const searchStyled = computed(() => ({ width: smAndUp.value ? '200px' : 'auto' }));
</script>
