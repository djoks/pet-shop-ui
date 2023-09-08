<script lang="ts" setup>
import { useFetchApi } from '../../composables/useFetchApi';
import { usePagination } from '../../composables/usePagination';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { Promotion } from "../../types/api/promotion/Promotion";

const { data } = useFetchApi<Promotion>('https://pet-shop.buckhill.com.hr/api/v1/main/promotions');
const { paginatedData } = usePagination<Promotion>(data);

</script>

<template>
  <Carousel class="overflow-hidden" :autoplay="2000" :wrap-around="true" v-if="paginatedData?.length > 0">
    <Slide v-for="slide in paginatedData" :key="slide.uuid">
      <div class="relative flex items-center justify-center w-full h-[400px] ">
        <ApiImage :uuid="slide.metadata.image" class="w-full h-full object-cover rounded-md" />
        <Caption class="absolute top-0" :title="slide.title" :content="slide.content" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
.carousel__prev,
.carousel__next {
  @apply absolute w-10 h-10 bg-white -mt-5 rounded-full shadow p-1;
}

.carousel__prev {
  @apply transform -translate-x-16 transition-transform duration-300 ease-in-out;
}

.carousel:hover .carousel__prev {
  @apply translate-x-10 mx-5;
}

.carousel__next {
  @apply transform translate-x-16 transition-transform duration-300 ease-in-out;
}

.carousel:hover .carousel__next {
  @apply -translate-x-10 mx-5;
}
</style>
