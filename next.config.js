/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  output: 'export',
  transpilePackages: ['lodash-es'],
};

module.exports = nextConfig;
