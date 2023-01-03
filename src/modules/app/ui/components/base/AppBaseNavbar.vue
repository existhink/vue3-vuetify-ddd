<template>
  <div class="container px-16 py-10">
    <VAppBar elevation="0" absolute class="app-bar px-10 py-5 rounded-xl">
      <div class="d-flex justify-space-between w-100">
        <div class="app-logo">
          <img src="~@/modules/app/assets/icons/app-logo.svg" alt="app-logo" />
        </div>

        <div class="list-items d-flex align-center gap-10">
          <div class="item">
            <a href="#" class="text-muted text-subtitle-2 text-decoration-none">Investasi</a>
          </div>

          <div class="item">
            <a href="#" class="text-muted text-subtitle-2 text-decoration-none">Saham</a>
          </div>

          <div class="item">
            <a href="#" class="text-muted text-subtitle-2 text-decoration-none">News</a>
          </div>

          <div class="item">
            <a href="#" class="text-muted text-subtitle-2 text-decoration-none">Portfolio</a>
          </div>
        </div>

        <div class="btn-group d-flex align-center gap-5">
          <v-menu class="text-black rounded-pill">
            <template #activator="{ props }">
              <v-btn color="primary" class="rounded-pill text-subtitle-2" variant="outlined" v-bind="props">
                <div class="d-flex align-center gap-2">
                  {{ currentLanguage.name }}
                  <v-icon>mdi-chevron-down</v-icon>
                </div>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(language, index) in listLanguage"
                :key="index"
                :disabled="currentLanguage.value === language.name"
                link
              >
                <v-list-item-title class="text-black" @click="onChangeLanguage()">{{
                  language.name
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            color="primary"
            size="large"
            class="text-uppercase bg-transparent text-subtitle-2 rounded-pill"
            width="120"
            >Masuk</v-btn
          >
          <v-btn
            color="white"
            size="large"
            class="text-uppercase bg-primary text-subtitle-2 rounded-pill"
            width="120"
            >Daftar</v-btn
          >
        </div>
      </div>
    </VAppBar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const listLanguage = computed(() => [
  { name: 'ENG', id: 'en' },
  { name: 'IND', id: 'id' },
]);

const currentLanguage = computed(() => {
  // return true;
  return listLanguage.value.find(item => item.id === locale.value);
});

const onChangeLanguage = () => {
  locale.value = locale.value == 'en' ? 'id' : 'en';
};
</script>

<style lang="scss" scoped>
.app-bar {
  box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07) !important;
}
</style>
