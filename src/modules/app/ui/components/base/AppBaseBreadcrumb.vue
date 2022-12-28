<template>
  <div>
    <VBreadcrumbs :items="breadcrumbs" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const crumbs = [];

  route.matched.map(e => {
    if (e.meta.breadcrumb) {
      const mappingParams = Object.keys(route.params).reduce((acc, param) => {
        acc[`:${param}`] = route.params[param];
        return acc;
      }, {});
      const mappingParamsArr = Object.keys(mappingParams);
      const path = e.path.replace(new RegExp(mappingParamsArr.join('|'), 'ig'), matched => mappingParams[matched]);
      crumbs.push({
        disabled: e.meta.breadcrumbDisabled ?? false,
        exact: true,
        text: e.meta.breadcrumb,
        to: { path: mappingParamsArr.length ? path : e.path },
      });
    }
    return e;
  });

  if (crumbs.length > 0) {
    const lastIndex = crumbs.length - 1;
    crumbs[lastIndex].activeClass = 'v-breadcrumbs__item--last';
    crumbs[lastIndex].disabled = true;
  }

  return crumbs;
});
</script>

<style lang="scss" scoped></style>
