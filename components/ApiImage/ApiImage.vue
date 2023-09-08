<script lang="ts" setup>
const { uuid } = defineProps<{ uuid: string }>();
const src = `https://pet-shop.buckhill.com.hr/api/v1/file/${uuid}`;

</script>

<template>
  <img :src="src" v-bind="$attrs" :alt="uuid" />
</template>

<style scoped></style>
