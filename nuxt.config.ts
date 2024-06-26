// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled:false },
  app: {
    head: {
      title: 'ServenC',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8'
        }
      ],
    }
    },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image","@hypernym/nuxt-gsap","nuxt-aos"],

  css: [
    'normalize.css/normalize.css',
    '@/assets/css/tailwind.css',
  ],
  
  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },
/*   gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    }
  }, */
  components: true,
  build: {
    transpile: ["gsap"]
  },
  aos: {
    easing: 'ease',
    offset: 120,
    once: true,
    mirror: true,
    startEvent: 'DOMContentLoaded', 
  },
})