<template>
  <section class="before:content-[''] bg-[url('@/assets/images/line2.png')] bg-auto bg-no-repeat bg-[left_-2rem_bottom_-2rem]">
    <div class="mx-auto mt-20 pt-16 px-14">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col justify-center items-start">
          <h1 class="text-5xl text-teal-100 font-bold ">Administramos Sonhos</h1>
          <p class="mt-4 text-gray-600 text-lg">
            Foque no que realmente importa
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
            quidem quam repellat. </p>
          <ButtonPrice />
        </div>

        <div>
          <img class="w-auto h-[32rem] mx-auto " src="@/assets/images/homen3.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scooped lang="css">
section::before {
  @apply absolute -z-10 top-[5rem] left-[2rem] h-full w-full bg-[url('@/assets/images/line2.png')] bg-auto bg-no-repeat;
}
</style>