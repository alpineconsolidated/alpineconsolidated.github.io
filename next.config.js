// next.config.js
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
require("dotenv").config();

module.exports = withPlugins(
  [
    [withImages],
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]"
        }
      }
    ]
  ],
  {
    webpack: config => {
      return config;
    }
  },
  {
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  }
);
