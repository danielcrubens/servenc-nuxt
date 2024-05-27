<template>
  <section class="bg-teal">
    <div class="mx-auto py-16 px-14">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200">
          <h4 @click="showContent('empresarial')">Empresarial</h4>
          <h4 @click="showContent('residencial')">Residencial</h4>
          <h4 @click="showContent('comercial')">Comercial</h4>
        </div>
        <div class="rounded-lg bg-gray-200 lg:col-span-2">
          <p v-if="selectedContent === 'empresarial'">Conteúdo Empresarial...</p>
          <p v-else-if="selectedContent === 'residencial'">Conteúdo Residencial...</p>
          <p v-else-if="selectedContent === 'comercial'">Conteúdo Comercial...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedContent = ref('');

const showContent = (type) => {
  selectedContent.value = type;
};
</script>
