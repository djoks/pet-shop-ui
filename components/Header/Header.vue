<script lang="ts" setup>
import { useModalStore } from '../../stores/modal';
import { useAuthStore } from '../../stores/auth';
import { useFetchApi } from '../../composables/useFetchApi';

const { menuItems } = useMenu("top");
const modal = useModalStore();
const auth = useAuthStore();

</script>

<template>
  <div class="w-full h-16 bg-primary">
    <div class="container mx-auto flex items-center justify-between w-full h-full">
      <Logo variant="white" alignment="horizontal" size="sm" />

      <Menu :items="menuItems" variant="light" :uppercase="true" font-size="md"
        hover-class="hover:bg-white hover:bg-opacity-5" />

      <div class="flex space-x-5">
        <Button variant="white" type="outline" :uppercase="true">
          <div class="flex space-x-2">
            <img :src="`./img/menu/cart.svg`" alt="cart" />
            <span>Cart (0)</span>
          </div>
        </Button>
        <Button v-if="auth.token" variant="white" type="outline" :uppercase="true">Logout</Button>
        <Button v-else @click="modal.openModal()" variant="white" type="outline" :uppercase="true">Login</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>