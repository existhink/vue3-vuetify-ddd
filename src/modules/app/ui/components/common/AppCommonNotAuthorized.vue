<template>
  <div>
    <h1>Not Auhtorized</h1>
    <VBtn @click="onBack">Back</VBtn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const onBack = () => {
  router.push({ name: 'Dashboard' });
};
</script>
