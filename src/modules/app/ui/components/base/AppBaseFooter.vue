<template>
  <footer class="container">
    <v-row class="mb-16">
      <v-col cols="12" md="3">
        <img src="@/modules/app/assets/icons/app-logo-primary.svg" alt="app-logo" />
      </v-col>

      <v-col cols="12" md="3">
        <div class="d-flex flex-column gap-6">
          <div class="heading">
            <h1 class="text-subtitle-1 text-black font-weight-bold">PT. Joven Kreasi Indonesia</h1>
            <p class="text-subtitle-1 text-black">
              Jl. Dangdeur Indah III No.5, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40163
            </p>
          </div>

          <div class="about-us d-flex flex-column gap-4">
            <div class="d-flex align-center gap-2">
              <img src="@/modules/app/assets/icons/icon-phone.svg" alt="icon-phone" />

              <p class="text-subtitle-1 text-black">(+62 22) 6788-839</p>
            </div>

            <div class="d-flex align-center gap-2">
              <img src="@/modules/app/assets/icons/icon-email.svg" alt="icon-email" />

              <p class="text-subtitle-1 text-black">info@joven.id</p>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <div class="d-flex flex-column gap-3">
          <h1 class="text-subtitle-1 text-black font-weight-bold">Menu</h1>

          <a
            v-for="(item, index) in listMenus"
            :key="index"
            :href="item.link"
            class="text-primary text-subtitle-1 text-decoration-none"
          >
            {{ item.title }}
          </a>
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <div class="d-flex flex-column gap-3">
          <h1 class="text-subtitle-1 text-black font-weight-bold">Berizin dan Diawasi oleh</h1>

          <img src="@/modules/app/assets/icons/ojk-logo.svg" alt="ojk-logo" />
        </div>
      </v-col>
    </v-row>

    <div class="d-flex justify-space-between mt-16 pt-16">
      <!-- Copyright -->
      <p class="text-subtitle-2 text-black text-uppercase">
        COPYRIGHT 2021 PT JOVEN KREASI INDONESIA. ALL RESERVED
      </p>

      <div class="follow-us d-flex align-center gap-6">
        <h1 class="text-subtitle-1 text-black font-weight-bold">Ikuti Kami</h1>

        <div class="d-flex align-center gap-3">
          <img src="@/modules/app/assets/icons/icon-facebook.svg" alt="icon-facebook" />
          <img src="@/modules/app/assets/icons/icon-instagram.svg" alt="icon-instagram" />
          <img src="@/modules/app/assets/icons/icon-youtube.svg" alt="icon-youtube" />
          <img src="@/modules/app/assets/icons/icon-telegram.svg" alt="icon-telegram" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppBaseFooter',
  setup() {
    const listMenus = [
      {
        title: 'Investasi',
        link: '#',
      },
      {
        title: 'Daftarkan Bisnis',
        link: '#',
      },
      {
        title: 'Bantuan',
        link: '#',
      },
      {
        title: 'Artikel',
        link: '#',
      },
    ];

    return {
      listMenus,
    };
  },
};
</script>

<style lang="scss">
footer {
  background: url('../../../assets/images/bg-footer.svg') no-repeat;
  background-size: cover;

  &.container {
    padding-top: 100px;
    padding-bottom: 140px;
  }
}
</style>
