<template>
  <VApp class="app-main px-16 py-10">
    <AppBaseNavbar />
    <VMain class="mt-10">
      <RouterView />
    </VMain>
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
