<template>
  <VApp class="app-main">
    <AppBaseNavbar />
    <VMain class="pa-0">
      <RouterView />
    </VMain>
    <AppBaseFooter />
  </VApp>
</template>

<script setup>
// Vue
// import { ref } from 'vue';

// Composable
// import useKeycloak from '@/modules/app/composable/useKeycloak';
// import { useDisplay } from 'vuetify';

// const { smAndUp } = useDisplay();
// // const drawer = ref(smAndUp.value);
// // const menus = [
// //   { id: 1, name: 'Menu #1' },
// //   { id: 2, name: 'Menu #2' },
// //   { id: 3, name: 'Menu #3' },
// // ];
</script>

<style lang="scss" scoped>
.app-main {
  font-size: 14px;
}
</style>
