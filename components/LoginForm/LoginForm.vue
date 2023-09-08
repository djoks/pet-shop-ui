<script lang="ts" setup>
import { ref } from 'vue';
import { useMutateApi } from '../../composables/useMutateApi';
import { useAuthStore } from '../../stores/auth';
import { useModalStore } from '../../stores/modal';

const { execute, loading, data, error } = useMutateApi();
const auth = useAuthStore();
const modal = useModalStore();
const email = ref('');
const password = ref('');

const login = async () => {
  await execute('user/login', { email: email.value, password: password.value });
  console.log({ data });
  if (data.value?.data?.token) {
    auth.setToken(data.value.data.token);
    modal.closeModal();
  }
};
</script>

<template>
  <form @submit.prevent="login" class="flex flex-col w-[470px] rounded bg-white py-10 px-16">
    <div class="flex flex-col bg-primary items-center justify-center mx-auto w-28 h-28 p-5 rounded-full">
      <Logo variant="white" size="sm" />
    </div>

    <div class="mt-5 text-xl text-center">Log In</div>

    <TextInput type="email" v-model="email" class="mt-5" placeholder="Email" required />

    <TextInput type="password" v-model="password" class="mt-5" placeholder="Password" required />

    <div class="flex items-center mt-5">
      <CheckBoxInput />
      <label class="text-sm ml-2">Remember me</label>
    </div>

    <Button class="mt-10" type="raised" variant="primary" :uppercase="true" :full="true" :submit="true">Log In</Button>

    <div class="flex justify-between mt-8">
      <NuxtLink class="text-sm text-denim font-light" to="">Forgot password?</NuxtLink>
      <NuxtLink class="text-sm text-denim font-light" to="">Don't have an account? Sign up</NuxtLink>
    </div>

    <div v-if="error" class="mt-3 text-center text-sm text-red-500">
      Failed to authenticate user.
    </div>
  </form>
</template>

<style scoped></style>
