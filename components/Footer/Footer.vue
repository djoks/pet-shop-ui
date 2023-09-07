<script lang="ts" setup></script>

<template>
  <div class="bg-gin w-full">
    <div class="flex container mx-auto py-32 justify-between">
      <Logo />

      <FooterSection title="Petson">
        <div class="flex flex-col space-y-3 font-light">
          <NuxtLink to="">About us</NuxtLink>
          <NuxtLink to="">Blog</NuxtLink>
          <NuxtLink to="">Store Locator</NuxtLink>
        </div>
      </FooterSection>

      <FooterSection title="Contact">
        <div class="flex flex-col space-y-3 font-light">
          <span>contact@petson.com</span>
          <span>+385 000 000</span>
          <span>35 Shnauzer avenue, Dogville AL</span>
        </div>
      </FooterSection>

      <FooterSection title="Information">
        <div class="flex flex-col space-y-3 font-light">
          <NuxtLink to="">Ordering and shipping</NuxtLink>
          <NuxtLink to="">FAQ</NuxtLink>
          <NuxtLink to="">GDPR statement</NuxtLink>
        </div>
      </FooterSection>

      <FooterSection>
        <div class="flex flex-col h-full font-light justify-center">
          <div>
            If you can’t find answer to your<br />question, please contact our
          </div>
          <NuxtLink to="" class="text-denim">customer service.</NuxtLink>
        </div>
      </FooterSection>
    </div>
  </div>
</template>

<style scoped></style>
