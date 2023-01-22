<template>
  <div class="container px-16 py-10 fixed top-0 left-0 right-0 z-2">
    <VAppBar elevation="0" class="app-bar px-10 py-5 rounded-xl z-1">
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

          <div v-if="!isUserHasLoggedIn" class="btn-actions">
            <router-link :to="{ name: 'authenticationLogin' }" class="text-decoration-none">
              <v-btn
                color="primary"
                size="large"
                class="text-uppercase bg-transparent text-subtitle-2 rounded-pill"
                width="120"
                >Masuk</v-btn
              >
            </router-link>

            <router-link :to="{ name: 'authenticationRegister' }" class="text-decoration-none">
              <v-btn
                color="white"
                size="large"
                class="text-uppercase bg-primary text-subtitle-2 rounded-pill"
                width="120"
                >Daftar</v-btn
              >
            </router-link>
          </div>

          <div v-else class="dropdown-user cursor-pointer">
            <v-menu transition="slide-y-transition">
              <template #activator="{ props }">
                <div class="d-flex align-center gap-3" v-bind="props">
                  <v-avatar size="32" color="primary">
                    <v-icon>mdi-account</v-icon>
                  </v-avatar>

                  <h1 class="text-subtitle-2 font-weight-medium">
                    {{ userData.first_name }}
                  </h1>

                  <img src="@/modules/app/assets/icons/icon-dropdown.svg" alt="icon" />
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Menu</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </VAppBar>
  </div>
</template>

<script setup>
// Vue
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// isEmpty - lodash
import isEmpty from 'lodash/isEmpty';

// Authentication - Store
import { useAuthenticationStore } from '@/modules/authentication/store/authentication.store';

const store = useAuthenticationStore();
const userData = store.authentication_user;
const { locale } = useI18n();
const listLanguage = computed(() => [
  { name: 'ENG', id: 'en' },
  { name: 'IND', id: 'id' },
]);

/**
 * @description Get status user, they are login or not
 *
 * @return {Boolean}
 */
const isUserHasLoggedIn = computed(() => {
  return !isEmpty(store.authentication_user);
});

/**
 * @description Get current language
 *
 * @return {Object}
 */
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
  position: sticky !important;

  .dropdown-user {
    border-left: 2px solid #f3f3f3;
    padding-left: 1rem;
  }
}
</style>
