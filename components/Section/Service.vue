<template>
  <section class="bg-teal">
    <div class="mx-auto px-9 py-6 lg:px-14 lg:py-16">
      <h2 class="text-2xl lg:text-4xl font-bold text-white text-center">
        Nossos Serviços
      </h2>
      <h3 class="text-xl lg:text-3xl font-semibold text-white text-center">
        Tudo que você precisa em uma administradora
      </h3>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-24 lg:mt-14 mt-8">
        <div class=" lg:grid py-4">
          <div class="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5 grid grid-cols-3 gap-3">
            <div class="btn-service group"  @click="showContent('empresarial')">
              <span class="absolute px-12 py-3 rounded inset-0 border border-yellow group-active:border-yellow"></span>
              <span
                class="h-full py-3 px-5 w-full border rounded border-yellow bg-yellow  transition-transform active:border-yellow active:bg-yellow group-hover:-translate-x-1 group-hover:-translate-y-1 capitalize  text-teal md:text-xl text-base  font-semibold gap-1 flex justify-center lg:justify-start">
                <Building2 class="hidden lg:block"/>
                Empresarial
              </span>
            </div>
            <div class="btn-service group"  @click="showContent('residencial')">
              <span class="btn-service-hover"></span>
              <span
                class="btn-service-hover-text">
                <Home class="hidden lg:block"/>
                residencial
              </span>
            </div>
            <div class="btn-service group"  @click="showContent('comercial')">
              <span class="absolute px-12 py-3 rounded inset-0 border border-yellow group-active:border-yellow"></span>
              <span
                class="py-3 px-5 w-full border rounded border-yellow bg-yellow  transition-transform active:border-yellow active:bg-yellow group-hover:-translate-x-1 group-hover:-translate-y-1 capitalize text-teal md:text-xl text-base  font-semibold gap-1 flex justify-center lg:justify-start">
                <Building class="hidden lg:block"/>
                Comercial
              </span>
            </div>
          </div>
        </div>

        <div class="rounded  border border-yellow lg:col-span-2 lg:p-6 p-6">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16">
            <div v-if="selectedContent === 'empresarial'" class="grid-card">
              <div class="card">
                <h5>Administração de Contas</h5>
              </div>
              <div class="card">
                <h5>Assessoria Jurídica</h5>
              </div>
              <div class="card">
                <h5>Gestão de Contratos</h5>
              </div>

              <div class="card">
                <h5>Gestão de Conseração</h5>
              </div>

              <div class="card">
                <h5>Admissão e Demissão</h5>
              </div>
              <div class="card">
                <h5>Gestão e Assessoria em Gestão de Resíduos</h5>
              </div>
              <div class="card">
                <h5>Gestão de Mensalidade</h5>
              </div>
              <div class="card">
                <h5>Documentação</h5>
              </div>
              <div class="card">
                <h5>Gestão de Cobrança</h5>
              </div>
              <div class="card">
                <h5>Rastreio</h5>
              </div>
              <div class="card">
                <h5>Pagamentos</h5>
              </div>
              <div class="card">
                <h5>Suporte Técnico</h5>
              </div>
            </div>
            <div v-else-if="selectedContent === 'residencial'" class="grid-card">
              <div class="card">
                <h5>50% nos 2 primeiros meses</h5>
              </div>
              <div class="card">
                <h5>Gestão de Cobrança</h5>
              </div>
              <div class="card">
                <h5>Gestão de Contratos</h5>
              </div>
              <div class="card">
                <h5>Gestão de Inadimplência</h5>
              </div>
              <div class="card">
                <h5>Admissão e Demissão</h5>
              </div>
              <div class="card">
                <h5>Cobrança de Inadimplente</h5>
              </div>
              <div class="card">
                <h5>Gestão de Mensalidade</h5>
              </div>
              <div class="card">
                <h5>Assessoria em Assembleia Condominal</h5>
              </div>
            </div>
            <div v-else-if="selectedContent === 'comercial'" class="grid-card">
              <div class="card">
                <h5>50% nos 2 primeiros meses</h5>
              </div>
              <div class="card">
                <h5>Gestão de Mensalidade</h5>
              </div>
              <div class="card">
                <h5>Administração de contas</h5>
              </div>
              <div class="card">
                <h5>Gestão de Cobrança</h5>
              </div>
              <div class="card">
                <h5>Administração de Conseração</h5>
              </div>
              <div class="card">
                <h5>Assessoria em Assembleia Condominal</h5>
              </div>
              <div class="card">
                <h5>Admissão e Demissão</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.service {
  @apply py-3 px-5 w-full rounded bg-yellow cursor-pointer;

  h4 {
    @apply text-xl text-teal font-semibold;
  }
}

li {
  @apply text-white text-lg;
}
.grid-card {
  @apply grid grid-cols-2 gap-4 sm:grid-cols-3;
}

.card {
  @apply rounded border border-yellow mx-auto flex items-center justify-center text-center h-28 w-full p-5;

  h5 {
    @apply text-white font-medium lg:text-base ;
  }
}

.btn {
  @apply  relative rounded inline-block text-sm font-medium text-white focus:outline-none focus:ring;
}
.btn-service{
  @apply cursor-pointer  btn lg:w-full;
}
  .btn-service-hover{
    @apply absolute px-12 py-3 rounded inset-0 border border-yellow group-active:border-yellow;
  }
  .btn-service-hover-text{
    @apply py-3 px-5 w-full border rounded border-yellow bg-yellow  transition-transform active:border-yellow active:bg-yellow group-hover:-translate-x-1 group-hover:-translate-y-1 capitalize text-teal md:text-xl text-base font-semibold gap-1 flex justify-center lg:justify-start;
  }

</style>

<script setup>
import { ref } from 'vue';
import { Building2, Building, Home} from 'lucide-vue-next';

const selectedContent = ref('empresarial');
const showContent = (type) => {
  selectedContent.value = type;
}; 
</script>
