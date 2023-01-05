<template>
  <section id="carousel">
    <Swiper
      :slides-per-view="1.5"
      :space-between="30"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :centered-slides="true"
      :free-mode="true"
      :breakpoints="{
        500: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1.5,
        },
      }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide>
        <img src="~@/modules/app/assets/images/carousel.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="~@/modules/app/assets/images/carousel.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="~@/modules/app/assets/images/carousel.png" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
#carousel {
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
    padding-bottom: 2rem;

    &.swiper-slide-active {
      filter: drop-shadow(0px 12px 60px rgba(212, 212, 212, 0.5));
      width: 100%;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
