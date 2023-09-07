<script lang="ts" setup>
import type { ButtonProps } from "./Button.types"

const { menuItems } = useMenu("top");

</script>

<template>
  <div class="w-full h-16 bg-primary">
    <div class="container mx-auto flex items-center justify-between w-full h-full">
      <Logo variant="white" alignment="horizontal" size="sm" />

      <Menu :items="menuItems" variant="light" :uppercase="true" font-size="lg"
        hover-class="hover:bg-white hover:bg-opacity-5" />

      <div class="flex space-x-5">
        <Button variant="white" type="outline" :uppercase="true">
          <div class="flex space-x-2">
            <img :src="`./img/menu/cart.svg`" alt="cart" />
            <span>Cart (0)</span>
          </div>
        </Button>
        <Button variant="white" type="outline" :uppercase="true">Login</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>