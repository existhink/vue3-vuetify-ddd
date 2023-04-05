<template>
  <section id="authentication" class="w-screen-full h-screen-full container-fluid">
    <v-row class="justify-center align-center h-100 my-0">
      <v-col cols="7" class="d-none d-md-flex h-100 justify-center align-center">
        <img src="@/modules/app/assets/images/authentication/authentication-illustration.svg" alt="illustration" />
      </v-col>

      <v-col cols="12" md="5" class="h-100 py-0">
        <RouterView />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'AppLayoutAuthentication',
};
</script>

<style lang="scss">
#authentication {
  background: url('../../../assets/images/authentication/bg-authentication.png') no-repeat;
  background-size: 100% 100%;
}
</style>
