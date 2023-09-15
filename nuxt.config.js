export default {
  generate: {
    fallback: true
  },

  css: ['ress','~/assets/scss/base.scss', '~/assets/scss/global.scss'],

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KosukeMiyakePortfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/plugin',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources', 
    'nuxt-purgecss',
  ],

  purgeCSS: {
    enabled: true,
  },

  styleResources: {
    scss: ['~/assets/scss/app.scss'],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    'nuxt-microcms-module', 
  ],
  options: {
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.GET_API_KEY,
  },
  runtimeConfig: {
    apiKey: process.env.GET_API_KEY,
    serviceDomain: process.env.SERVICE_DOMAIN
  },
  env: {
    apiKey: process.env.GET_API_KEY,
    serviceDomain: process.env.SERVICE_DOMAIN
  },
  mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',

  build: {
    extractCSS: true
  },
}
