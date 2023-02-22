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
        destination: `http://43.201.146.63:5000/predict/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
