<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
router.replace({
  name: 'dashboard',
});

onMounted(() => {
  // console.log('Horeeee');
});
</script>
