<!-- layout.vue | page.vue | component.vue -->

<template>
  <div class=" h-[90vh] bg-gray-300 flex container items-center">
    <h1 class="box bg-red-500 w-8 h-8">Nuxt Gsap</h1>

  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  /*     $gsap.set(".box", {
    opacity: 0,
    scale: 0.6,
    rotate: 15
  }); */
  $gsap.to('.box', {
    duration: 3,
      x: 780,
      y:15,
    delay: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      /* toggleClass: 'active',
      toggleActions: "restart reverse resume none", */
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      pin: true,
      markers: true,
      invalidateOnRefresh: true
    },
  })
})
</script>