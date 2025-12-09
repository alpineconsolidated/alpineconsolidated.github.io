/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  transpilePackages: ['lodash-es'],
};

module.exports = nextConfig;
