<script lang="ts" setup>
import type { ButtonProps } from "./Button.types"

const props = defineProps<ButtonProps>();

const onClick = () => {
  if (!props.disabled) {
    props.onClick();
  }
};
</script>

<template>
  <button class="rounded-md py-2 text-sm" :class="[{ 'w-full': props.size == 'full' }, {
    'bg-primary hover:bg-primary-600 text-white': props.variant == 'primary' &&
      props.type == 'raised',
    'border border-white text-white hover:bg-white hover:bg-opacity-10': props.variant == 'white' &&
      props.type == 'outline',
    'border border-primary text-primary': props.variant == 'primary' &&
      props.type == 'outline',
    'text-primary': props.variant == 'primary' &&
      !props.type,
    'text-denim': props.variant == 'secondary' &&
      !props.type,
    'text-white': props.variant == 'white' &&
      !props.type
  }, { 'shadow-md hover:shadow-lg': props.type == 'raised' }, { 'uppercase': props.uppercase, 'px-5': props.type }]"
    :disabled="props.disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<style scoped></style>
