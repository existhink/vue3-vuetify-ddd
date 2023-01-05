<template>
  <section id="promotion" class="container my-16">
    <v-row>
      <v-col cols="12" md="6" class="pr-0 pr-md-4">
        <div class="d-flex flex-column gap-10">
          <h1 class="text-h6 text-lg-h4 font-weight-bold">
            Buka Peluang Bisnis dan Investasi Melalui Skema Gotong Royong secara Aman dan Transparan
          </h1>
          <p class="text-subtitle-1">
            Joven merupakan platform investasi bisnis dengan sistem Equity Crowdfunding (urun dana) yang sudah
            mendapatkan izin sebagai Penyelenggara dari Otoritas Jasa Keuangan, yang memfasilitasi Anda untuk
            memilih berbagai jenis efek.
          </p>

          <v-btn
            color="white"
            class="btn-primary text-uppercase text-subtitle-1 py-4"
            rounded="pill"
            width="240"
            height="54"
            >Daftar Sekarang</v-btn
          >

          <div class="d-flex align-center gap-5">
            <a href="#" class="text-decoration-none">
              <img src="@/modules/app/assets/icons/icon-button-appstore.svg" alt="icon-appstore" />
            </a>

            <a href="#" class="text-decoration-none">
              <img src="@/modules/app/assets/icons/icon-button-playstore.svg" alt="icon-playstore" />
            </a>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="box-content relative top-0 left-0 right-0 h-100">
          <div class="box-content__image relative top-0 left-0">
            <img
              src="@/modules/app/assets/images/blob-promotion.png"
              alt="Promotion"
              class="absolute top-0 right-0"
            />
          </div>

          <div class="box-content__business relative top-0 right-0 z-2">
            <div
              class="content absolute top-0 right-0 px-5 py-4 rounded-xl bg-white d-flex align-center gap-1 w-fit-content"
            >
              <img src="~@/modules/app/assets/icons/icon-coin.svg" alt="icon" />
              <div class="text">
                <h1 class="text-subtitle-1 text-lg-h6">50</h1>
                <p class="text-primary text-subtitle-2 font-weight-bold">Jumlah Bisnis Berjalan</p>
              </div>
            </div>
          </div>

          <div class="box-content__business relative bottom-0 left-0 z-2 h-100">
            <div
              class="content absolute bottom-0 left-0 px-5 py-4 rounded-xl bg-white d-flex align-center gap-1 w-fit-content"
            >
              <div class="text">
                <h1 class="text-subtitle-1 text-lg-h6">Grafik Bisnis</h1>
                <img src="~@/modules/app/assets/images/business-chart.svg" alt="chart" />
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'DashboardPromotion',
};
</script>

<style lang="scss">
#promotion {
  background: url('../../../app/assets/images/bg-promotion.svg') no-repeat;
  background-size: cover;

  .box-content {
    &__image {
      img {
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        width: 394px;
        height: 377px;
      }
    }

    &__business {
      .content {
        box-shadow: 0px 15px 34px rgba(0, 0, 0, 0.1271);
      }
    }
  }
}
</style>
