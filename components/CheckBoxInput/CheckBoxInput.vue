<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const { modelValue } = defineProps<{ modelValue?: boolean }>();
const emit = defineEmits();

const checked = ref(modelValue);

const updateValue = (e: Event) => {
  emit('update:modelValue', checked.value);
};
</script>

<template>
  <input type="checkbox"
    class="border border-gray-300 placeholder-gray-400 text-sm rounded focus:outline-gray-400 focus:outline-0 focus:border-gray-400"
    :checked="checked" v-bind="$attrs" @input="updateValue" />
</template>

<style scoped></style>
