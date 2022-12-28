<template>
  <VApp class="app-main">
    <VNavigationDrawer v-model="drawer"> </VNavigationDrawer>
    <VAppBar density="comfortable" color="primary" elevation="0">
      <VAppBarNavIcon @click="toggleDrawer"></VAppBarNavIcon>
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

const drawer = ref(false);
const { keycloak_onLogout } = useKeycloak();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const onLogout = () => {
  keycloak_onLogout();
};
</script>

<style lang="scss" scoped>
.app-main {
  font-size: 14px;
}
</style>
