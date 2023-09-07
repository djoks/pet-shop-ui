<script lang="ts" setup>
import type { MenuItemProps } from "./MenuItem.types"
import { ref } from 'vue';

const props = defineProps<MenuItemProps>();

const hovered = ref(false);

const hasSubItems = computed(() => {
  return props.subItems?.length > 0;
});


</script>

<template>
  <NuxtLink class="flex flex-row items-center justify-between w-full py-3 px-5 cursor-pointer"
    :class="[{ 'text-white': props.variant == 'light', 'text-blue-smoke': props.variant == 'dark' }, { 'text-sm': props.fontSize == 'sm', 'text-md': props.fontSize == 'md', 'text-lg': props.fontSize == 'lg' }, props.hoverClass]"
    :to="props.link" @mouseover="hovered = true" @mouseout="hovered = false">
    <div class="flex">
      <img v-if="props.icon" class="w-6 h-6" :src="`./img/menu/${props.icon}${hovered ? '-light' : ''}.svg`"
        :alt="props.label" />
      <span :class="{ 'uppercase': props.uppercase, 'ml-5': props.icon }">{{ props.label }}</span>
    </div>
    <svg v-if="hasSubItems" class="order-last ml-3" width="13" height="8" viewBox="0 0 13 8"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.63 0.567627L6.04004 5.14763L1.45004 0.567627L0.0400391 1.97763L6.04004 7.97763L12.04 1.97763L10.63 0.567627Z"
        :class="{ 'fill-white': props.variant == 'light', 'fill-blue-smoke': props.variant == 'dark' }" />
    </svg>
  </NuxtLink>
</template>

<style scoped></style>
