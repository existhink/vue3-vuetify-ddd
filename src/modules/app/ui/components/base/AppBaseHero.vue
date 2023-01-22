<template>
  <section id="base-hero" class="w-screen relative top-0 left-0">
    <div class="overlay w-screen h-100"></div>
    <div class="container absolute content left-0">
      <div class="d-flex flex-column w-100 h-100">
        <h1 class="text-white text-h5 text-md-h3 font-weight-bold font-inter">Artikel</h1>
        <p class="text-white text-subtitle-1 font-inter mt-3">Temukan artikel seputar bisnis disini</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppBaseHero',
};
</script>

<style lang="scss" scoped>
section#base-hero {
  height: 50vh;
  background: url('../../../assets/images/article/bg-hero.png') no-repeat;
  background-size: cover;
  opacity: 0.8;

  .overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  .content {
    top: 50%;
    transform: translateY(-30%);
  }
}
</style>
