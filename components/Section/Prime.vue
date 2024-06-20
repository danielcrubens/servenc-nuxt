<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-12 lg:px-8 lg:py-1">
      <div class="grid grid-cols-1  lg:grid-cols-2 lg:gap-16 py-10">
        <div class=" lg:order-last">
          <img src="assets/images/solution.svg">
        </div>

        <div class="lg:py-1 lg:col-span-1">
          <h2 class="text-2xl lg:text-4xl font-bold text-teal-100">ServenC Prime</h2>
          <p class="mt-4 text-gray-500 text-base">Já pensou na comodidade reunida em um único canal de para soluções
            Administrativa e Gestão Condominial!</p>
          <p class="text-gray-500 text-base">A ServenC Prime oferece essa solução, onde reúne a Gestão Condominial e
            Gestão Administrativa.</p>

          <div class="flex gap-8  mt-5">
            <div class="relative gap-8">
              <details class="group" @click="toggleButton(1)" :class="{ active: activeButton === 1 }">
                <summary
                  class="flex cursor-pointer items-center gap-2 border-y border-teal-100 py-1 text-teal-100 transition hover:border-gray-600">
                  <span class="text-sm font-medium"> Sindico Profissional </span>
                  <ChevronDown :size="20" class="transition group-open:-rotate-180" />
                </summary>
              </details>
              <div v-if="activeButton === 1">
                <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div class="w-auto rounded border border-gray-200 bg-white">
                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li><Check />Gestão Condominial</li>
                      <li><Check />Gestão Condominial</li>
                      <li><Check />Gestão Condominial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative gap-8">
              <details class="group" @click="toggleButton(2)" :class="{ active: activeButton === 2 }">
                <summary
                  class="flex cursor-pointer items-center gap-2 border-y border-teal-100 py-1 text-teal-100 transition hover:border-gray-600">
                  <span class="text-sm font-medium"> Administradora </span>
                  <ChevronDown :size="20" class="transition group-open:-rotate-180" />
                </summary>
              </details>
              <div v-if="activeButton === 2">
                <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div class="w-auto rounded border border-gray-200 bg-white">
                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>teste1</li>
                      <li>teste2</li>
                      <li>teste3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative gap-8">
              <details class="group" @click="toggleButton(3)" :class="{ active: activeButton === 3 }">
                <summary
                  class="flex cursor-pointer items-center gap-2 border-y border-teal-100 py-1 text-teal-100 transition hover:border-gray-600">
                  <span class="text-sm font-medium">  Benefícios da Junção </span>
                  <ChevronDown :size="20" class="transition group-open:-rotate-180" />
                </summary>
              </details>
              <div v-if="activeButton === 3">
                <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div class="w-auto rounded border border-gray-200 bg-white">
                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>teste12</li>
                      <li>teste22</li>
                      <li>teste23</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Check,ChevronDown } from 'lucide-vue-next';
import { ref } from 'vue';

const activeButton = ref(null);

const toggleButton = (buttonNumber) => {
  if (activeButton.value === buttonNumber) {
    // Se o botão clicado já está ativo, fecha ele
    activeButton.value = null;
  } else {
    // Se o botão clicado não está ativo, fecha o botão ativo anteriormente e ativa o clicado
    activeButton.value = buttonNumber;
  }
};
</script>