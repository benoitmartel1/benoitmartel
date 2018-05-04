var contents = require("./assets/js/content.json");

module.exports = {
  generate: {
    routes: createRoutes(contents.items)
  },
  head: {
    title: "Benoit Martel",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Benoit Martel - Motion & Coding"
      },
      { property: "og:image", content: "/media/portrait.png" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
        integrity:
          "sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700"
      }
    ],
    script: [
      { src: "/js/jquery-3.3.1.min.js" },
      { src: "/js/isotope.pkgd.min.js" }
    ]
  },
  css: ["~/assets/css/main.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
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

function createRoutes(items) {
  var routesArray = [];
  for (item of items) {
    routesArray.push("/projets/" + item.link);
  }
  return routesArray;
}
