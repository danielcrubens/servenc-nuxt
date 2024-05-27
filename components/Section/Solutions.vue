<template>
  <section class="after:content-['']  relative bg-[url('@/assets/images/line1.png')] bg-auto bg-no-repeat  bg-[right_-3rem_top_15rem]">
    <div class="mx-auto  py-16 px-14">
      <h2 class="text-4xl font-bold text-teal-100 text-center">
        Nossas Soluções
      </h2>
      <h3 class="text-3xl font-semibold text-teal-100 text-center">
        Tudo que você precisa em uma administradora
      </h3>
      <section>
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-2 gap-x-6 sm:grid-cols-4">
              <div class="card ">
                <Building :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Assessoria Especializada</h4>
              </div>
              <div class="mt-5 card">
                <Building2 :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Implantação</h4>
              </div>
              <div class="card">
                <Contact :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Processos e Contratos</h4>
              </div>
              <div class="mt-5 card">
                <Users :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Gestão de Pessoas</h4>
              </div>
              <div class="card">
                <UserCog :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Central de Apoio Técnico</h4>
              </div>
              <div class="mt-5 animate-pulse transition delay-700 duration-700 ease-in-out rounded mx-auto flex flex-col items-stretch justify-center text-center w-full h-40 bg-pink  shadow-lg focus:outline-none focus:ring">
                <DollarSign :size="30" color="#ffff" class=" mx-auto"/>
                <h4 class="text-white text-xl font-bold">Cashback</h4>
              </div>
              <div class="card">
                <Handshake :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Canal do Sindico</h4>
              </div>
              <div class="mt-5 card">
                <Trophy :size="30" color="#e30061" class=" mx-auto"/>
                <h4 class="text-xl text-pink font-semibold">Prêmios</h4>
              </div>
              <div class="card">
                <NotepadText :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Prestação de Contas</h4>
              </div>
              <div class="mt-5 card">
                <CircleDollarSign :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Pagar e Receber</h4>
              </div>
              <div class="card">
                <Gavel :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Gestão de Inadimplência</h4>
              </div>
              <div class="mt-5 card">
                <Headset :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Atendimento Dedicado</h4>
              </div>
            </div>
        </div>
      </section>
    </div>

  </section>
</template>

<style scoped  lang="scss">
.card {
  @apply rounded mx-auto flex flex-col items-stretch justify-center text-center w-full h-40 bg-pink-100  shadow-lg focus:outline-none focus:ring;
  h4{
    @apply text-xl text-pink font-semibold;
  }
}

section::after {
  @apply absolute bottom-[4rem] left-[-4rem] h-56 w-56 bg-[url('@/assets/images/line1.png')] bg-auto bg-left bg-no-repeat;
}
</style>

<script setup>
  import {Gavel, Headset,CircleDollarSign,NotepadText, Building,Building2,Contact,Users,UserCog,Handshake,DollarSign,Trophy} from 'lucide-vue-next';
</script>

