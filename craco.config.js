const CracoAlias = require("craco-alias");

// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },

    plugins: [
      {
        plugin: CracoAlias,
        options: {
          baseUrl: "./src",
          aliases: {
            "@screen": "./screen",
            "@model":  "./model",
            "@service":  "./service",
            "@store":  "./store",
            "@thunk":  "./store/thunk",
            "@assets":  "./assets",
            "@component":  "./component"
          },
        }
      }
    ]
  } 