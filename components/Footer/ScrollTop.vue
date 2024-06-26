<template>
  <div class="relative">
    <button  @click="scrollToTop" class=" absolute -top-14 right-5 hover:brightness-95 hover:transform hover:translate-y-1 transition duration-200 ease-in flex rounded-full p-1.5 ">
      <ArrowUp color="#ffff"/>
    </button>
  </div>
</template>

<script setup>
import { ArrowUp  } from 'lucide-vue-next';
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


</script>