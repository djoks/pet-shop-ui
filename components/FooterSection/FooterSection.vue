<script lang="ts" setup>
import type { FooterSectionProps } from "./FooterSection.types"

const props = defineProps<FooterSectionProps>();

</script>

<template>
  <div class="flex flex-col justify-center">
    <div v-if="props.title" class="text-md font-bold mb-3">{{ props.title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
