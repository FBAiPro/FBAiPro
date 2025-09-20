/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  },
  // Produce a minimal server bundle for containerized deploys (Cloud Run)
  output: "standalone",
};

export default nextConfig;
