export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  buildModules: [
    '@pinia/nuxt',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },

  css: [
    '~/assets/css/global.css'
  ],

  modules: ["@pinia/nuxt"]
})