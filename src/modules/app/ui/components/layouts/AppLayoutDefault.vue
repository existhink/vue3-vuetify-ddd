<template>
  <VApp class="app-main">
    <VNavigationDrawer v-model="drawer"> </VNavigationDrawer>
    <VAppBar>
      <VAppBarNavIcon @click="toggleDrawer"></VAppBarNavIcon>
      <VToolbarTitle>Application <VBtn @click="onLogout">Logout</VBtn></VToolbarTitle>
    </VAppBar>
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script setup>
import { ref } from 'vue';
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
