<script lang="ts" setup>
import type { Category } from "../../types/Category";

const props = defineProps<{ category: Category }>();

const { data } = useFetchApi<Promotion>('products', { limit: 9, category: props.category.uuid });
const { paginatedData } = usePagination<Promotion>(data);

</script>

<template>
  <div class="flex flex-col w-full">
    <div class="text-4xl font-light text-primary capitalize">{{ props.category.title }}</div>

    <Carousel class="mt-10" :items-to-show="3" :wrap-around="true">
      <Slide class="p-5" v-for="product in paginatedData" :key="slide">
        <ProductItem :product="product" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped></style>
