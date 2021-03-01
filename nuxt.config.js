export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		'~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  	'@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAXwCYbNrkw3AhHeWTvIlJCvGr5VnY85bo",
          authDomain: "push-notification-test-d9f80.firebaseapp.com",
          databaseURL: "https://push-notification-test-d9f80.firebaseio.com",
          projectId: "push-notification-test-d9f80",
          storageBucket: "push-notification-test-d9f80.appspot.com",
          messagingSenderId: "405139637664",
          appId: "1:405139637664:web:b7091bf08c06418e1210c5",
          measurementId: "G-YE4Q3S3P2Y"
        },
        services: {
          messaging: {
            createServiceWorker: false,
            fcmPublicVapidKey: 'BHCQsKptKxoQqVX6-MmLlupvbrJ3rW0E8sW0xlyBy_1TveAMqTs1QTJQxQfia0Db-DjO4tJgMcKRMtj53aC9pTg'
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      importScripts: [
        'firebase-messaging-sw.js'
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
