<template>
  <section id="news" class="container my-16 bg-lightPrimary">
    <div class="d-flex justify-space-between align-center">
      <h1 class="text-h6 text-lg-h4 text-black font-weight-bold">Berita Terbaru</h1>

      <div class="actions d-flex align-center gap-4">
        <img src="@/modules/app/assets/icons/icon-previous.svg" alt="icon-previous" />
        <img src="@/modules/app/assets/icons/icon-next.svg" alt="icon-next" />
      </div>
    </div>

    <Swiper
      :slides-per-view="4"
      :slides-per-column="4"
      :grid="{
        rows: 1,
      }"
      :space-between="30"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper mt-10"
    >
      <SwiperSlide v-for="(item, index) in listNews" :key="index" class="bg-transparent">
        <AppBaseCardBusiness type="mediaWithText" :title="item.title" :source-image="item.image">
          <template #card-body>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center gap-2">
                <img
                  src="@/modules/app/assets/icons/icon-calendar-outlined.svg"
                  class="icon icon-calendar"
                  alt="icon-calendar"
                />
                <p class="text-caption text-muted">{{ item.created_at }}</p>
              </div>

              <div class="d-flex align-center gap-2">
                <img
                  src="@/modules/app/assets/icons/icon-person-outlined.svg"
                  class="icon icon-person"
                  alt="icon-person"
                />
                <p class="text-caption text-muted">{{ item.author }}</p>
              </div>
            </div>
          </template>

          <template #card-footer>
            <a href="#" class="text-decoration-none">
              <div class="d-flex align-center gap-2">
                <h1 class="text-subtitle-2 text-primary font-weight-medium">Lihat semua</h1>
                <img
                  src="@/modules/app/assets/icons/icon-right-arrow-primary.svg"
                  class="icon icon-arrow-right"
                  alt="icon-arrow-right"
                />
              </div>
            </a>
          </template>
        </AppBaseCardBusiness>
      </SwiperSlide>
    </Swiper>

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
// Constant
import { DASHBOARD_LIST_NEWS_DATA } from '../../constants/dashboard.constant';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
export default {
  name: 'DashboardNews',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      listNews: DASHBOARD_LIST_NEWS_DATA,
    };
  },
};
</script>

<style lang="scss">
#news {
  .icon {
    width: 20px;
    height: 20px;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;
    padding-bottom: 1rem;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}
</style>
