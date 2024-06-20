<template>
  <header class="bg-teal fixed w-full top-0 left-0 z-20">
    <div class=" py-6 md:w-11/12 mx-auto px-5 md:px-0">
      <div class="flex h-0 py-4 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:-ml-6">
          <Logo/>
        </div>
        <NavBar/>
      </div>
    </div>
  </header>
</template>
<script setup>
import Logo from '../Header/Logo.vue'
import NavBar from '../Header/NavBar.vue'
</script>