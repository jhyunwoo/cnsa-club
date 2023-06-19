/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: "/google-analytics",
        destination: "https://www.googletagmanager.com/gtag/js?id=G-82BMM1EFF1",
      },
    ];
  },

}

module.exports = nextConfig
