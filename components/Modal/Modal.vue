<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useModalStore } from '../stores/modal';

const modal = useModalStore();

const isOpen = ref(false);

const closeModal = () => {
    isOpen.value = false;
};

const openModal = () => {
    isOpen.value = true;
};

const backdropClick = (event: Event) => {
    if (event.target === event.currentTarget) {
        modal.closeModal();
    }
};

watchEffect(() => {
    if (process.client) {
        if (isOpen.value) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }
});

defineExpose({ closeModal, openModal });
</script>

<template>
    <div @click="backdropClick" class="fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center z-50">
        <slot></slot>
    </div>
</template>

<style scoped></style>