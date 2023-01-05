<template>
  <section id="card-excess-points" class="relative top-0 left-0 right-0 h-100">
    <div class="card relative left-0 px-8 pt-8 pb-6 rounded-lg w-75 h-100">
      <div class="d-flex flex-column gap-6">
        <h1 class="text-h6 text-primary font-weight-bold w-75">{{ title }}</h1>

        <p class="text-subtitle-2">{{ subtitle }}</p>
      </div>
    </div>

    <div class="absolute top-0 right-0 box-icon bg-white px-5 py-7">
      <img :src="`src/modules/app/assets/icons/${iconOfExcessPoints}.svg`" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardExcessPoints',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    iconOfExcessPoints: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
#card-excess-points {
  .card {
    background: #f3f3f7;
    top: 3rem;
  }

  .box-icon {
    box-shadow: 0px 7px 15px rgba(58, 58, 58, 0.0950706);
    border-radius: 16px;
    right: 4rem;
  }
}
</style>
