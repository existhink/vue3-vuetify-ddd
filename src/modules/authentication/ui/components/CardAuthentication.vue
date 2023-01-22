<template>
  <v-card class="custom-shadow-card pa-10 pa-md-15 bg-white h-100 mr-5 rounded-xl">
    <v-card-title>
      <div class="d-flex flex-column gap-9">
        <img src="@/modules/app/assets/icons/app-logo.svg" alt="app-logo" class="app-logo" />

        <div class="greeting-text">
          <h1 class="text-h5 text-md-h6 font-weight-bold font-inter">{{ title }}</h1>
          <div class="d-flex align-center gap-2">
            <p class="text-subtitle-2 text-muted font-inter">{{ subtitle }}</p>

            <router-link
              v-if="isUsingRouterLink"
              :to="linkUrl"
              class="text-primary text-subtitle-1 font-inter text-decoration-none"
              >{{ textLink }}</router-link
            >
          </div>
        </div>
      </div>
    </v-card-title>

    <v-card-item>
      <slot name="card-body" />
    </v-card-item>

    <v-card-actions>
      <slot name="card-footer" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardAuthentication',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    isUsingRouterLink: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: '',
    },
    textLink: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.v-card {
  overflow: auto;
  img.app-logo {
    width: 120px;
    height: 40px;
  }
}
</style>
