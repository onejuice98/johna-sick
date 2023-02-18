/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/predict/:path*",
        destination: `http://127.0.0.1:5000/predict/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
