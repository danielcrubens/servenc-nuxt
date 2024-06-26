<template>

  <button @click="SindicoProfissional = true"
    class="mt-8 group relative   rounded inline-block text-sm font-medium text-white focus:outline-none">
    <span class="absolute px-12 py-3 rounded inset-0 border border-pink group-active:border-pink"></span>
    <span
      class="block border rounded border-pink bg-pink  px-2 py-3 transition-transform active:border-pink active:bg-pink group-hover:-translate-x-1 text-base group-hover:-translate-y-1 capitalize ">
      Sindico Profissional
    </span>
  </button>
  <button @click="Beneficios = true"
    class="mt-8 group relative   rounded inline-block text-sm font-medium text-white focus:outline-none">
    <span class="absolute px-12 py-3 rounded inset-0 border border-pink group-active:border-pink"></span>
    <span
      class="block border rounded border-pink bg-pink  px-2 py-3 transition-transform active:border-pink active:bg-pink group-hover:-translate-x-1 text-base group-hover:-translate-y-1 capitalize ">
      Benefícios da Junção
    </span>
  </button>
  <button @click="Administradora = true"
    class="mt-8 group relative   rounded inline-block text-sm font-medium text-white focus:outline-none">
    <span class="absolute px-12 py-3 rounded inset-0 border border-pink group-active:border-pink"></span>
    <span
      class="block border rounded border-pink bg-pink  px-2 py-3 transition-transform active:border-pink active:bg-pink group-hover:-translate-x-1 text-base group-hover:-translate-y-1 capitalize ">
      Administradora
    </span>
  </button>


  <Transition name="fade">
    <div v-if="SindicoProfissional" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-8 md:w-8/12 lg:w-4/12 w-11/12 mx-auto rounded shadow-lg relative">
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Gestão Condominia</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Gestão de Pessoa</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2" />
          <p>Representação Condominial</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Gestão de Conflitos Internos</p>
        </div>
        <X @click="SindicoProfissional = false" color="#dc2626" class="cursor-pointer absolute top-4 right-4" />
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="Administradora" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-8 md:w-8/12 lg:w-4/12 w-11/12 mx-auto rounded shadow-lg relative">
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Gestão das Finanças</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Admissão e Demissão</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2" />
          <p>Gestão de Contratos</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Gestão de Mensalidades</p>
        </div>
        <X @click="Administradora = false" color="#dc2626" class="cursor-pointer absolute  top-4 right-4" />
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="Beneficios" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-8 md:w-8/12 lg:w-4/12 w-11/12 mx-auto rounded shadow-lg relative">
        <div class="flex items-start mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Redução de Custo na mensalidade: Sindico + Administração</p>
        </div>
        <div class="flex items-start mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Redução de Burocracia quanto a solução de conflitos</p>
        </div>
        <div class="flex items-start mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2" />
          <p>Fiscalização direta por meio do Conselho Fiscal formada pelos Condôminos</p>
        </div>
        <div class="flex items-center mb-4 text-modal">
          <Check :size="18" color="#006b7f" class="mr-2 " />
          <p>Todos os benefícios ServenC</p>
        </div>

        <X @click="Beneficios = false" color="#dc2626" class="cursor-pointer absolute  top-4 right-4" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.text-modal {
  @apply text-gray-500 text-base;
}

.fade-enter-active {
  animation: slide-open 0.4s ease forwards;
}

.fade-leave-active {
  animation: slide-close 0.4s ease forwards;
}

@keyframes slide-open {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slide-close {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>

<script setup>
import { X, Check } from 'lucide-vue-next';
import { ref } from 'vue';

const SindicoProfissional = ref(false);
const Beneficios = ref(false);
const Administradora = ref(false);
</script>
