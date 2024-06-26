<template>
  <NuxtLink @click="scrollToSection('home')">
      <img class="w-auto md:h-auto h-14 cursor-pointer" src="assets/icons/ServenC.svg" alt="logo">
  </NuxtLink>
</template>

<script setup>
import scrollMixin from '../mixins/scrollMixin'; 
const { scrollToSection } = scrollMixin.methods;
</script>