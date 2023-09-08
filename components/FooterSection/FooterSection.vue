<script lang="ts" setup>

const props = defineProps<{ title?: string }>();

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
