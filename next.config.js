// next.config.js
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTM = require("next-transpile-modules");
require("dotenv").config();

module.exports = withPlugins(
  [
    [
      withImages,
      {
        images: {
          disableStaticImages: true
        }
      }
    ],
    [
      withTM,
      {
        transpileModules: ["lodash-es"]
      }
    ],
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
  },
  {
    target: "serverless"
  }
);
