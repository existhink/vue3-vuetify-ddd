<template>
  <div>
    <AppBaseDialog v-bind="dialog" max-width="800">
      <DashboardForm @ok="onCloseDialog" @close="onCloseDialog" />
    </AppBaseDialog>

    <div class="pa-3 pt-0">
      <AppBaseTableHeader @change="appTable_updateFilter">
        <template #left>
          <VBtn
            v-if="$can($permission.DASHBOARD.CAN_SHOW_SAMPLE_DIALOG)"
            color="primary"
            @click="onShowDialogForm"
          >
            Sample Dialog (Hide)
          </VBtn>

          <VBtn v-if="$can($permission.DASHBOARD.READ)" color="primary" @click="onShowDialogForm">
            Sample Dialog
          </VBtn>
        </template>
      </AppBaseTableHeader>
      <AppDataTable
        v-model:server-options="appTable_data.options"
        :server-items-length="dashboard_store.dashboard_posts.length"
        :headers="headers"
        :items="dashboard_store.dashboard_posts"
        :loading="dashboard_loading"
        alternating
        hide-footer
      />
      <AppBaseTableFooter @change="appTable_updateFilter" />
    </div>
  </div>
</template>

<script setup>
// Vue
import { computed, onBeforeMount, onBeforeUnmount, watch } from 'vue';

// Composable
import useDashboard from '@/modules/dashboard/composable/useDashboard';
import useAppTable from '@/modules/app/composable/useAppTable';
import useAppDialog from '@/modules/app/composable/useAppDialog';

// Components
import DashboardForm from '@/modules/dashboard/ui/components/DashboardForm.vue';

// -- Table
const {
  dashboard_fetchPosts,
  dashboard_fetchPost,
  dashboard_store,
  dashboard_loading,
  dashboard_clearAllRequest,
} = useDashboard();

const { appTable_data, appTable_updateFilter, appTable_buildParams } = useAppTable();

const headers = computed(() => [
  { text: 'ID', value: 'id', sortable: true },
  { text: 'Title', value: 'title', sortable: true },
  { text: 'Body', value: 'body', sortable: true },
]);

const fetchPosts = async () => {
  const params = appTable_buildParams({
    mappingFilter: {
      search: 'change-filter-search-to-custom',
    },
    mappingSort: {
      body: 'change-sort-body-to-custom',
    },
  });

  // Simplify
  // const params = appTable_buildParams();

  await dashboard_fetchPosts({ limit: 10, ...params });
};

const fetchPost = async () => {
  await dashboard_fetchPost(2);
};

watch(appTable_data, fetchPosts, { deep: true });

onBeforeMount(async () => {
  dashboard_store.$reset();

  await fetchPosts();
  await fetchPost();
});

onBeforeUnmount(() => {
  dashboard_clearAllRequest();
});

// -- Dialog
const { dialog, dialog_showDialog, dialog_closeDialog } = useAppDialog();
const onShowDialogForm = () => {
  dialog_showDialog();
};
const onCloseDialog = () => {
  dialog_closeDialog();
};
</script>
