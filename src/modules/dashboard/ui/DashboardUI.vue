<template>
  <div>
    <AppBaseDialog v-bind="dialog.options" max-width="800">
      <DashboardForm @ok="onCloseDialog" @close="onCloseDialog" />
    </AppBaseDialog>

    <div class="pa-5">
      <AppBaseTableHeader @change="appTable_updateFilter">
        <template #left>
          <VBtn color="primary" elevation="0" @click="onShowDialogForm">Sample Dialog</VBtn>
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

const { appTable_data, appTable_updateFilter, appTable_mapSort, appTable_mapFilter, appTable_buildParams } =
  useAppTable();

const headers = computed(() => [
  { text: 'ID', value: 'id', sortable: true },
  { text: 'Title', value: 'title', sortable: true },
  { text: 'Body', value: 'body', sortable: true },
]);

// Initialize params (optional) or put in fetch function
appTable_data.filter.limit = 10;

const fetchPosts = async () => {
  const params = appTable_buildParams(
    appTable_mapFilter({
      search: 's',
    }),
    appTable_mapSort({
      body: 'change-sort-param-in-here',
    }),
  );

  // Simplify
  // const params = appTable_buildParams();

  await dashboard_fetchPosts(params);
};

const fetchPost = async () => {
  await dashboard_fetchPost(2);
};

watch(
  () => appTable_data,
  async () => await fetchPosts(),
  { deep: true },
);

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
const onShowDialogForm = () => dialog_showDialog();
const onCloseDialog = () => dialog_closeDialog();
</script>
