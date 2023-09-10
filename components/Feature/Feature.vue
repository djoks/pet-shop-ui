<script lang="ts" setup>
import type { FeatureProps } from "./Feature.types";

const props = withDefaults(defineProps<FeatureProps>(), {
  imagePosition: "left"
});
</script>

<template>
  <div :class="{ 'flex-row-reverse': props.imagePosition == 'right' }" class="flex items-center">
    <div class="w-2/3">
      <img :src="props.imageSrc" alt="feature" class="w-full h-auto object-contain rounded">
    </div>
    <div class="w-1/3 p-4">
      <div class="text-4xl text-primary font-light">{{ props.caption }}</div>
      <NuxtLink to="" class="inline-flex bg-primary text-white underline mt-5 px-3 py-2">{{ props.actionText }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
