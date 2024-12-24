<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Cards from './components/PreviewCards.vue'

</script>

<template>
  <Header />
  <Cards />
  <RouterView />
</template>

<style scoped>

</style>
