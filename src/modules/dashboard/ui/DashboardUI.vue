<template>
  <section id="dashboard">
    <DashboardCarousel />
    <DashboardPromotion />
    <DashboardTrigger />
    <DashboardPoints />
    <DashboardListAvailableBusiness />
    <DashboardCrowfunding />
    <DashboardNews />
    <DashboardMockup />
  </section>
</template>

<script>
import DashboardCarousel from './components/DashboardCarousel.vue';
import DashboardCrowfunding from './components/DashboardCrowfunding.vue';
import DashboardListAvailableBusiness from './components/DashboardListAvailableBusiness.vue';
import DashboardMockup from './components/DashboardMockup.vue';
import DashboardNews from './components/DashboardNews.vue';
import DashboardPoints from './components/DashboardPoints.vue';
import DashboardPromotion from './components/DashboardPromotion.vue';
import DashboardTrigger from './components/DashboardTrigger.vue';

export default {
  name: 'DashboardUI',
  components: {
    DashboardCarousel,
    DashboardCrowfunding,
    DashboardListAvailableBusiness,
    DashboardMockup,
    DashboardNews,
    DashboardPoints,
    DashboardPromotion,
    DashboardTrigger,
  },
};
</script>
