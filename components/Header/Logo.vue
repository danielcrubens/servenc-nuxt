<template>
  <NuxtLink @click="scrollToSection('home')">
      <img class="w-auto md:h-auto h-14 cursor-pointer" src="assets/icons/logo-branco.png" alt="logo">
  </NuxtLink>
</template>

<script setup>
import scrollMixin from '../mixins/scrollMixin'; 
const { scrollToSection } = scrollMixin.methods;
</script>