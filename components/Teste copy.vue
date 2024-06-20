<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';


const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 100,
        backgroundColor: "red",
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 10%',
          scrub: true,
          pin: false,
          markers: true,
           
        },
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main>
  
    <div class="panel flex  center column" ref="main">
      <div class="box gradient-green p-14">box</div>
      <div class="box gradient-green p-14 mt-9">box</div>
      <div class="box gradient-green p-14 mt-16">box</div>
    </div>

  </main>
</template>
