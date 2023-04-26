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
  },/* Netlify requires its own redirection when deploying with them
  async redirects() {
    return [
      {
        source: 'url-shortener',
        destination: 'https://www.alyajouri.com/', // Insert link to hosted url-shortener
        permanent: true,
        basePath: false,
      },
    ]
  }, */
  headers: () => [
    {
      source: '/',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
