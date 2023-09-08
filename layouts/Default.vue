<script lang="ts" setup>
import { useModalStore } from '../stores/modal';

const modal = useModalStore();
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <slot />
    </div>
    <Footer />
    <Modal v-if="modal.isOpen">
      <LoginForm />
    </Modal>
  </div>
</template>

<style scoped></style>
