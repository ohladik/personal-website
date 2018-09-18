module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "ohladik",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Personal website built using Vue and Nuxt.js"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "displayed.png?v2" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "rgba(0, 0, 0, 0.5)" },
  /*
  ** Configure plugins which are initialized before the app is launched
  */
  plugins: [
    { src: "~/plugins/fontawesome" },
    { src: "~/plugins/animate_favicon", ssr: false },
    { src: "~/plugins/gyronorm", ssr: false }
  ],
  /*
  ** Set global CSS (included in every page)
  */
  css: ["@/assets/css/main.css", "@fortawesome/fontawesome/styles.css"],
  /*
  ** Build configuration
  */
  build: {
    // These dependencies won't be loaded with each page bundle
    vendor: ["vanilla-tilt", "gyronorm"],
    // Use webpack-bundle-analyzer to visualize build bundles
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
