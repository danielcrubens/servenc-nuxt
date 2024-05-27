// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/tailwind.css',
    /* '@nuxtjs/google-fonts', */
    /* '@nuxt/image', */
  ],
  components: true,
})