<template>
  <section id="list-available-business" class="container my-16">
    <div class="d-flex flex-column align-center gap-6 mt-10">
      <h1 class="text-h6 text-lg-h4 text-black font-weight-bold">Investasi Bisnis yang Tersedia</h1>

      <p class="text-subtitle-1 text-muted font-weight-regular">
        Lihat daftar investasi bisnis yang tersedia dan temukan peluang untuk berinvestasi hari ini.
      </p>
    </div>

    <v-row class="mt-16">
      <v-col v-for="(item, index) in listBusinessData" :key="index" cols="12" md="4">
        <AppBaseCardBusiness
          type="complex"
          :business-name="item.name"
          :business-address="item.address"
          :business-category="item.category"
          :business-launching="item.launching_date"
          :total-investors="item.total_investors"
          :total-investments="item.total_investments"
          :source-image="item.image"
        />
      </v-col>
    </v-row>

    <div class="d-flex justify-center mt-10">
      <a href="#" class="text-decoration-none">
        <v-btn
          color="white"
          class="bg-primary text-uppercase text-subtitle-1 py-4 mt-10"
          rounded="pill"
          width="240"
          height="54"
          >Lihat Semua</v-btn
        >
      </a>
    </div>
  </section>
</template>

<script>
// import Constant
import { DASHBOARD_LIST_BUSINESS_DATA } from '../../constants/dashboard.constant';

export default {
  name: 'DashboardListAvailableBusiness',
  components: {
    // CardExcessPoints,
  },
  setup() {
    return {
      listBusinessData: DASHBOARD_LIST_BUSINESS_DATA,
    };
  },
};
</script>
