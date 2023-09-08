<script lang="ts" setup>
import type { CaptionProps } from "./Caption.types";

const props = defineProps<CaptionProps>();
</script>

<template>
  <div class="flex flex-col items-start space-y-3 p-10">
    <div class="bg-black bg-opacity-40 text-white text-start text-6xl font-light p-3">{{ props.title }}</div>
    <div class="bg-black bg-opacity-40 text-white text-start text-xl font-light  p-3">{{ props.content }}</div>
  </div>
</template>

<style scoped></style>
