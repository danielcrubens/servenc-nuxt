<template>
  <div>
    <button class="relative group  py-36 lg:hidden" @click="toggle">
      <div :class="{ 'bg-transparent': true }"
        class="relative flex overflow-hidden items-center justify-items-center w-11 h-11 py-3 transform transition-all duration-200 -ml-14 rounded">
        <div
          class="flex flex-col  justify-between w-full h-[20px] mx-auto  transform transition-all duration-300 origin-center overflow-hidden">
          <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"
            :class="{ 'group-focus:rotate-[42deg]': isToggled }"></div>
          <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300"
            :class="{ 'group-focus:-translate-x-10': isToggled }"></div>
          <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"
            :class="{ 'group-focus:-rotate-[42deg]': isToggled }"></div>
        </div>
      </div>
    </button>
    <Transition name="slide">
      <div v-if="isToggled" class="lg:hidden shadow-lg  absolute right-0 left-0 top-16">
    
        <ul class="flex flex-col items-center justify-start bg-teal h-full mx-auto gap-6 py-9">
        <li>
          <a class="link" href="#">Serviços</a>
        </li>
        <li>
          <a class="link" href="#">Diferenciais</a>
        </li>
        <li>
          <a class="link" href="#">ServenC Prime</a>
        </li>
        <a class=" rounded group relative inline-block overflow-hidden border border-yellow px-8 py-3 focus:outline-none focus:ring"
            href="#">
            <span
              class="absolute inset-y-0 left-0 w-[0px] bg-yellow transition-all group-hover:w-full group-active:bg-yellow"></span>
            <span
              class="relative text-base font-medium text-yellow transition-colors flex items-center justify-center group-hover:text-teal gap-2">
              <LogIn/> Login
            </span>
          </a>
          <a class=" rounded group relative inline-block overflow-hidden border border-yellow px-8 py-3 focus:outline-none focus:ring"
            href="#">
            <span
              class="absolute inset-y-0 left-0 w-[0px] bg-yellow transition-all group-hover:w-full group-active:bg-yellow"></span>
            <span
              class="relative text-base font-medium text-yellow transition-colors flex items-center justify-center group-hover:text-teal gap-2">
              <FileSpreadsheet /> Boleto
            </span>
          </a>
      </ul>
      </div>
    </Transition>
    
  </div>
</template>

<style scoped>
.link {
  @apply text-white text-base font-semibold transition hover:text-white/75;
}
.slide-enter-active {
  animation: slide-open 0.4s ease forwards;

}

.slide-leave-active {
  animation: slide-close 0.4s ease forwards;

}

@keyframes slide-open {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-close {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>

<script setup>
import { FileSpreadsheet, LogIn } from 'lucide-vue-next';

const isToggled = ref(false);

const toggle = () => {
  console.log(isToggled.value);
  isToggled.value = !isToggled.value;
};
</script>
