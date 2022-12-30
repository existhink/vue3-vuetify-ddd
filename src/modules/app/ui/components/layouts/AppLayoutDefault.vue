<template>
  <VApp class="app-main">
    <VNavigationDrawer v-model="drawer">
      <VList :items="menus" item-title="name" item-value="id" nav density="compact" />
    </VNavigationDrawer>
    <VAppBar density="comfortable" color="primary" elevation="0">
      <VAppBarNavIcon @click="onToggleDrawer"></VAppBarNavIcon>
      <VToolbarTitle>Vue Skeleton</VToolbarTitle>
      <VSpacer />
      <VBtn variant="flat" color="secondary" @click="onLogout">Logout</VBtn>
    </VAppBar>
    <VMain>
      <AppBaseBreadcrumb />
      <RouterView />
    </VMain>
  </VApp>
</template>

<script setup>
// Vue
import { ref } from 'vue';

// Composable
import useKeycloak from '@/modules/app/composable/useKeycloak';
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
const drawer = ref(smAndUp.value);
const menus = [
  { id: 1, name: 'Menu #1' },
  { id: 2, name: 'Menu #2' },
  { id: 3, name: 'Menu #3' },
];

const onToggleDrawer = () => {
  drawer.value = !drawer.value;
};

const { keycloak_onLogout } = useKeycloak();
const onLogout = () => {
  keycloak_onLogout();
};
</script>

<style lang="scss" scoped>
.app-main {
  font-size: 14px;
}
</style>
