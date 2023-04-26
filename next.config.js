/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: 'url-shortener',
        destination: 'https://www.alyajouri.com/', // Insert link to hosted url-shortener
        permanent: true,
        basePath: false,
      },
    ]
  },
};

module.exports = nextConfig;
