<template>
  <section id="crowfunding" class="container my-16">
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <img src="@/modules/app/assets/images/crowfunding-illustration.svg" alt="crowfunding-illustration" />
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex flex-column gap-5">
          <h1 class="text-h6 text-lg-h4 text-black font-weight-bold">
            Kelola Bisnis dan Investasi Skema Urunan (Equity Crowdfunding) Secara Aman dan Nyaman
          </h1>

          <p class="text-subtitle-1 text-muted">
            Kamu dapat berinvestasi pada sebuah bisnis atau membuka peluang bisnis waralaba bersama dimulai dari Rp
            50 ribu per saham dan menerima keuntungan bisnis reguler.
          </p>
        </div>

        <v-btn
          color="white"
          class="bg-primary text-uppercase text-subtitle-1 py-4 mt-10"
          rounded="pill"
          width="240"
          height="54"
          >Daftarkan Bisnis</v-btn
        >
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'DashboardCrowfunding',
};
</script>
