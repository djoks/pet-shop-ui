<script lang="ts" setup>
import { useFetchApi } from '../composables/useFetchApi';
import { usePagination } from '../composables/usePagination';
import { Promotion } from "../types/promotion/Promotion";
import { Category } from "../types/Category";

const { data: promotionData } = useFetchApi<Promotion>('https://pet-shop.buckhill.com.hr/api/v1/main/promotions');
const { paginatedData: promotions } = usePagination<Promotion>(promotionData);

const { data: categoryData } = useFetchApi<Category>('https://pet-shop.buckhill.com.hr/api/v1/categories', { page: 1, limit: 2 });
const { paginatedData: categories } = usePagination<Category>(categoryData);

const firstCategory = computed(() => categories.value ? (categories.value as Category[])[0] : null);
const secondCategory = computed(() => categories.value ? (categories.value as Category[])[1] : null);

</script>

<template>
  <div class="flex w-2/3 mx-auto flex-col py-10">

    <div class="w-2/3 mx-auto mb-5">
      <SearchInput />
    </div>

    <PromotionSlider :promotions="promotions" />

    <CategoryCarousel class="my-10" :category="firstCategory" v-if="firstCategory" />

    <Feature class="mt-10" image-src="./img/featured/treat-your-pup.jpg" caption="Treat your pup"
      action-text="Discover our dog treat selection" />

    <CategoryCarousel :category="secondCategory" v-if="secondCategory" />

    <Feature class="my-10" image-src="./img/featured/get-the-best-tips.jpg" image-position="right"
      caption="Get the best tips" action-text="Read our blog" />

  </div>
</template>

<style scoped></style>
