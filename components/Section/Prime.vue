<template>
  <section id="prime">
    <div class="mx-auto px-9 py-6 lg:px-16 lg:py-16">
      <div class="grid grid-cols-1  lg:grid-cols-2 lg:gap-16 py-10">
        <div class=" lg:order-last"data-aos-delay="360"data-aos="fade-left" data-aos-duration="1400">
          <img src="assets/images/solution.svg">
        </div>
        <div class="lg:py-1 lg:col-span-1 mt-12 md:mt-0"data-aos-delay="360"data-aos="fade-right" data-aos-duration="1400">
          <h2 class="text-2xl lg:text-4xl font-bold text-teal-100">ServenC Prime</h2>
          <p class="mt-4 text-gray-500 text-base">Já pensou na comodidade reunida em um único canal de para soluções
            Administrativa e Gestão Condominial!</p>
          <p class="text-gray-500 text-base">A ServenC Prime oferece essa solução, onde reúne a Gestão Condominial e
            Gestão Administrativa.</p>

          <div class="md:flex  grid md:gap-4  mt-5">
            <ButtonModal />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonModal from '../Modal/ButtonModal.vue'
</script>