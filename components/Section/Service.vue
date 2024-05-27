<template>
  <section class="bg-teal">
    <div class="mx-auto py-16 px-14">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-24">
        <div class="">
          <div class="service">
            <h4 class="" @click="showContent('empresarial')">Empresarial</h4>
          </div>
          <div class="service">
            <h4 @click="showContent('residencial')">Residencial</h4>
          </div>
          <div class="service">
            <h4 @click="showContent('comercial')">Comercial</h4>
          </div>
        </div>
        <div class="rounded  border border-yellow lg:col-span-2 p-6 ">

  

      <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16">
        
  
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <a
            class="block rounded border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
  
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
  
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
  
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
  
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
  
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            
  
            <h2 class="mt-2 font-bold">Accountant</h2>
  
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </a>
        </div>
      </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.service {
  @apply py-3 px-5 mb-6 rounded bg-yellow;

  h4 {
    @apply text-xl text-teal font-semibold;
  }
}
li{
    @apply text-white text-lg;
  }
</style>
<script setup>
/* import { ref } from 'vue';

const selectedContent = ref('empresarial');

const showContent = (type) => {
  selectedContent.value = type;
}; */
</script>
