<template>
  <section id="mock-up" class="container mt-16">
    <v-row class="justify-center gap-10">
      <v-col cols="6" class="justify-center">
        <h1 class="text-h6 text-lg-h4 text-black font-weight-bold text-center">
          Investasi dan kelola bisnis melalui jentikan jari pada Smartphone
        </h1>
      </v-col>

      <v-col cols="auto" class="justify-center">
        <img src="@/modules/app/assets/images/mockup.png" alt="mock-up" />
      </v-col>

      <v-col cols="6" class="justify-center">
        <h2 class="text-subtitle-1 text-white text-center">
          Joven berkomitmen untuk memfasilitasi kegiatan investasi dan bisnis berbasis teknologi yang aksesisbel
          dan aman dengan izin resmi OJK
        </h2>
      </v-col>

      <v-col cols="6" class="justify-center">
        <div class="d-flex justify-center align-center gap-4">
          <a href="#" class="text-decoration-none">
            <img
              src="@/modules/app/assets/icons/icon-button-appstore.svg"
              class="rounded-pill"
              alt="icon-appstore"
            />
          </a>

          <a href="#" class="text-decoration-none">
            <img
              src="@/modules/app/assets/icons/icon-button-playstore.svg"
              class="rounded-pill"
              alt="icon-playstore"
            />
          </a>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'DashboardMockup',
};
</script>

<style lang="scss">
#mock-up {
  background: url('../../../app/assets/images/bg-mockup.svg') no-repeat;
  background-size: cover;
}
</style>
