<template>
  <section id="solutions" class="md:py-8 after:content-['']  relative bg-[url('@/assets/images/line1.png')] bg-auto bg-no-repeat  bg-[right_-3rem_top_15rem]">
    <div class="mx-auto py-6 px-5 lg:py-16 lg:px-14">
      <h2 class="text-2xl lg:text-4xl font-bold text-teal-100 text-center"data-aos-delay="300" data-aos-offset="350" data-aos="fade-up" data-aos-duration="1400">
        Nossas Soluções
      </h2>
      <h3 class="text-xl lg:text-3xl font-semibold text-teal-100 text-center"data-aos-delay="350" data-aos-offset="350" data-aos="fade-up" data-aos-duration="1400">
        Tudo que você precisa em uma administradora
      </h3>
      <section>
        <div class="max-w-screen-xl  mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-2 gap-x-6 sm:grid-cols-4"data-aos-delay="360" data-aos-offset="350" data-aos="zoom-in" data-aos-duration="1400">
              <div class="card">
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
              <a href="https://servenc.hlp.polgo.online/" target="_blank" class="mt-5 animate-pulse transition delay-700 duration-700 ease-in-out rounded mx-auto flex flex-col items-stretch justify-center text-center w-full h-40 bg-pink  shadow-lg focus:outline-none ">
                <DollarSign :size="30" color="#ffff" class=" mx-auto"/>
                <h4 class="text-white font-bold">Cashback</h4>
              </a>
              <div class="card">
                <Handshake :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Canal do Sindico</h4>
              </div>
              <div class="mt-5 card">
                <Trophy :size="30" color="#e30061" class=" mx-auto"/>
                <h4>Prêmios</h4>
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
.card{
  @apply rounded mx-auto flex flex-col items-stretch justify-center text-center w-full h-40 bg-pink-100  shadow-lg focus:outline-none focus:ring;
  h4{
    @apply  lg:text-xl px-1 text-pink font-semibold;
  }
}

section::after {
  @apply absolute -z-10 bottom-[4rem] left-[-4rem] h-56 w-56 bg-[url('@/assets/images/line1.png')] bg-auto bg-left bg-no-repeat;
}
</style>

<script setup>
  import {Gavel, Headset,CircleDollarSign,NotepadText, Building,Building2,Contact,Users,UserCog,Handshake,DollarSign,Trophy} from 'lucide-vue-next';
</script>

