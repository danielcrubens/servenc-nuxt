<template>
  <footer class="bg-teal py-3">
    <div class="mx-auto">
      <ul class="py-2 flex justify-center items-center gap-x-5">
        <li class="bg-white hover:brightness-95 hover:transform hover:translate-y-1 transition duration-200 ease-in flex rounded-full p-1.5">
          <a href="mailto:atendimento@servenc.com.br" >
            <Email />
          </a>
        </li>
  
        <li class="bg-white  hover:brightness-95 hover:transform hover:translate-y-1 transition duration-200 ease-in flex rounded-full p-1.5">
          <NuxtLink  to="https://instagram.com/servenc.adm/" target="blank">
            <Instagram />
          </NuxtLink>
        </li>
        <li class="bg-white  hover:brightness-95 hover:transform hover:translate-y-1 transition duration-200 ease-in flex rounded-full p-1.5">
          <NuxtLink  to="https://api.whatsapp.com/send?phone=551532243762&text=Olá, tudo bem? Estou no site da ServenC administradora. Poderia me ajudar?" target="_blank">
            <Whatsapp />
          </NuxtLink>
        </li>
      </ul>
      <p class="mx-auto  max-w-md text-center  text-white">
     {{ currentYear }} ©ServenC 
      </p>
    </div>
   <ScrollTop/>
  </footer>
</template>

<script setup>
import Instagram from '../assets/icons/Instagram.vue';
import Whatsapp from '../assets/icons/Whatsapp.vue';
import Email from '../assets/icons/Email.vue';
import ScrollTop from '../Footer/ScrollTop.vue';

import { computed } from 'vue';

const currentYear = computed(() => {
  return new Date().getFullYear();
});

</script>
