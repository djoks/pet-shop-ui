<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { Promotion } from "../types/promotion/Promotion";

const props = defineProps<{ promotions: Promotion[] }>();
</script>

<template>
  <div class="promotion_slider">
    <Carousel class="overflow-hidden" :autoplay="2000" :wrap-around="true" v-if="props.promotions?.length > 0">
      <Slide v-for="slide in props.promotions" :key="slide.uuid">
        <div class="relative flex items-center justify-center w-full h-[400px]">
          <ApiImage :uuid="slide.metadata.image" class="w-full h-full object-cover rounded-md" />
          <Caption class="absolute top-0" :title="slide.title" :content="slide.content" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
.promotion_slider .carousel__prev,
.promotion_slider .carousel__next {
  @apply absolute w-10 h-10 bg-white -mt-5 rounded-full shadow p-1;
}

.promotion_slider .carousel__prev {
  @apply transform -translate-x-16 transition-transform duration-300 ease-in-out;
}

.promotion_slider .carousel:hover .carousel__prev {
  @apply translate-x-10 mx-5;
}

.promotion_slider .carousel__next {
  @apply transform translate-x-16 transition-transform duration-300 ease-in-out;
}

.promotion_slider .carousel:hover .carousel__next {
  @apply -translate-x-10 mx-5;
}
</style>
