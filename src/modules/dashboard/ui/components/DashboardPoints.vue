<template>
  <section id="points" class="container my-16">
    <v-row>
      <v-col v-for="(item, index) in listExcessPoints" :key="index" cols="12" md="4">
        <CardExcessPoints :icon-of-excess-points="item.icon" :title="item.title" :subtitle="item.subtitle" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import CardExcessPoints from './ExcessPoints/CardExcessPoints.vue';

export default {
  name: 'DashboardPoints',
  components: {
    CardExcessPoints,
  },
  setup() {
    const listExcessPoints = [
      {
        icon: 'icon-thumbs',
        title: 'Investasi Gotong Royong',
        subtitle: 'Terbitkan ide bisnis atau investasi bisnis dengan legalitas PT secara gotong royong',
      },
      {
        icon: 'icon-laptop',
        title: 'Transparansi Bisnis',
        subtitle: 'Semua laporan dan proses bisnis dapat diakses melalui aplikasi',
      },
      {
        icon: 'icon-chart-profit',
        title: 'Aliran Profit Berkala',
        subtitle: 'Dapatkan profit berkala sesuai persentase kepemilikan saham secara otomatis',
      },
    ];

    return {
      listExcessPoints,
    };
  },
};
</script>