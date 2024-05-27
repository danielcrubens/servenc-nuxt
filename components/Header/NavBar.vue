<template>
  <div class="md:flex md:items-center md:gap-12">
    <nav aria-label="Global" class="hidden  lg:block ">
      <ul class="flex items-center gap-6 ">
        <li>
          <a class="link" href="#">Serviços</a>
        </li>
        <li>
          <a class="link" href="#">Diferenciais</a>
        </li>
        <li>
          <a class="link" href="#">ServenC Prime</a>
        </li>
      </ul>
    </nav>

    <div class="flex items-center justify-center ">
      <div class="hidden  lg:block space-x-6"> 
        <a href="#" class=" rounded group relative inline-block overflow-hidden border border-yellow px-8 py-3 focus:outline-none focus:ring">
          <span
            class="absolute inset-y-0 left-0 w-[0px] bg-yellow transition-all group-hover:w-full group-active:bg-yellow"></span>
          <span
            class="relative text-base font-medium text-yellow transition-colors flex items-center justify-center group-hover:text-teal">
            <FileSpreadsheet :size="20" /> Boleto
          </span>
        </a>
        <a href="#" class=" rounded group relative inline-block overflow-hidden border border-yellow px-8 py-3 focus:outline-none focus:ring">
          <span
            class="absolute inset-y-0 left-0 w-[0px] bg-yellow transition-all group-hover:w-full group-active:bg-yellow"></span>
          <span
            class="relative text-base font-medium text-yellow transition-colors flex items-center justify-center group-hover:text-teal">
            <LogIn :size="20" /> Login
          </span>
        </a>
      </div>
      <div class="block ">
        <HamburgerMenu />
      </div>
    </div>

  </div>
</template>

<style lang="css" scoped>
.link {
  @apply text-white text-base font-semibold transition hover:text-white/75;
}
</style>

<script setup>
import { FileSpreadsheet, LogIn } from 'lucide-vue-next';
import HamburgerMenu from '../Header/HamburgerMenu.vue'
</script>