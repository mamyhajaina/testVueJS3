<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/useAuthStore';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const authStore = useAuthStore();
  
  const handleLogin = async () => {
    await authStore.login(email.value, password.value);
    router.push({ name: 'home' });
  };
  </script>
  