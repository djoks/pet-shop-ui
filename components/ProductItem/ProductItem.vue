<script lang="ts" setup>
import type { Product } from "../../types/product/Product";

const props = defineProps<{ product: Product }>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col space-y-3 text-start font-bold">
      <ApiImage class="w-[220px] h-[220px] object-contain" :uuid="props.product.metadata.image" />
      <div v-ellipsize="2" v-tooltip.bottom-start="props.product.title">
        {{ props.product.title }}
      </div>
    </div>
    <div class="text-start font-sm font-light capitalize">{{ props.product.category.title }}</div>
  </div>
</template>

<style scoped></style>
