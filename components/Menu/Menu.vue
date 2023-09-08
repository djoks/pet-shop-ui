<script lang="ts" setup>
import type { MenuProps } from "./Menu.types";

const props = withDefaults(defineProps<MenuProps>(), {
  variant: "dark",
  alignment: "horizontal",
  uppercase: false,
  fontSize: "sm"
})

</script>

<template>
  <ul class="flex" :class="{ 'flex-row': props.alignment == 'horizontal', 'flex-col': props.alignment == 'vertical' }">
    <li v-for="item in props.items" :key="item.label">
      <MenuItem :variant="props.variant" :icon="item?.icon" :label="item.label" :link="item.link"
        :uppercase="props.uppercase" :font-size="props.fontSize" :sub-items="item.subItems"
        :hover-class="props.hoverClass" :active-class="props.activeClass" />
    </li>
  </ul>
</template>

<style scoped></style>
