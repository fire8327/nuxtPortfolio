// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
    "nuxt-icons",
    "@nuxt/content"
  ],
  googleFonts: {
    families: {
        'Inter': true
    }
  },
  vue: {
    propsDestructure: true
  }
})