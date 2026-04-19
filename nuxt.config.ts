// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "FLOW",
      link: [{ rel: "icon", type: "image/png", href: "/FLOW.png" }],
    },
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",
});
