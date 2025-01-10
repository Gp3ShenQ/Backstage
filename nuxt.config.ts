// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ['@vueuse/core'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
})
