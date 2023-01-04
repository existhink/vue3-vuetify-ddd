<template>
  <section id="trigger" class="container my-16">
    <div class="d-flex justify-center w-100 mb-5">
      <h1 class="text-h6 text-lg-h3 text-white font-weight-bold">Mulai Investasi Sekarang!</h1>
    </div>

    <v-row class="justify-center align-center mt-16">
      <v-col v-for="(item, index) in listDataTrigger" :key="index" cols="6" md="3" class="justify-center">
        <div class="d-flex flex-column gap-5 align-center">
          <img :src="`src/modules/app/assets/icons/${item.icon}.svg`" />

          <div class="text w-fit-content">
            <h2 class="text-subtitle-1 text-md-h4 text-white font-weight-bold text-center text-center w-auto">
              {{ item.title }}
            </h2>
            <p class="text-white text-uppercase mt-2 text-center w-auto">{{ item.subtitle }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'DashboardTrigger',
  setup() {
    const listDataTrigger = [
      {
        icon: 'icon-time',
        title: '36 Detik',
        subtitle: 'Penjualan Tercepat',
      },
      {
        icon: 'icon-investor',
        title: '89.2 Ribu',
        subtitle: 'Total Investor Terdaftar',
      },
      {
        icon: 'icon-invest',
        title: 'Rp. 52.6 Miliar',
        subtitle: 'Total Investasi',
      },
      {
        icon: 'icon-business',
        title: '103',
        subtitle: 'Total Bisnis',
      },
    ];

    return {
      listDataTrigger,
    };
  },
};
</script>

<style lang="scss">
#trigger {
  background: url('../../../app/assets/images/bg-trigger.svg') no-repeat;
  background-size: cover;
}
</style>
