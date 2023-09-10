<script lang="ts" setup>
import { ref } from 'vue';

const { modelValue } = defineProps<{ modelValue?: string }>();
const emit = defineEmits();

const value = ref(modelValue);

const updateValue = (e: Event) => {
  const newValue = (e.target as HTMLInputElement).value;
  value.value = newValue;
  emit('update:modelValue', newValue);
};
</script>

<template>
  <input
    class="border border-gray-300 placeholder-gray-400 p-3 text-sm rounded focus:outline-gray-400 focus:outline-0 focus:border-gray-400"
    :value="value" v-bind="$attrs" @input="updateValue" />
</template>

<style scoped></style>
