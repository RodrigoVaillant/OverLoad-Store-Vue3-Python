<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

</script>

<template>
    <div class="bg-green-500 text-black p-20">
    Пример компонента с TailwindCSS,
  </div>
  <Header />
  <RouterView />
</template>

<style scoped>

</style>
