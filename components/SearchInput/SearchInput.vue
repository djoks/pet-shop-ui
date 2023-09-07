<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { SearchInputProps } from "./SearchInput.types"

const { modelValue } = defineProps<SearchInputProps>();
const emit = defineEmits();
const focused = ref(false);

let timeout;

const debounceInput = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    emit('update:modelValue', event.target.value);
  }, 300);
};
</script>

<template>
  <div class="flex items-center rounded border px-3 bg-white border-primary" :class="{ 'border-primary-600': focused }">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        class="fill-primary" :class="{ 'fill-primary-600': focused }" />
    </svg>


    <input class="w-full focus:outline-none placeholder-primary focus:placeholder-primary-600 text-sm p-3" type="text"
      @focus="focused = true" @blur="focused = false" :value="modelValue" @input="debounceInput"
      placeholder="Search products">
  </div>
</template>

<style scoped></style>
