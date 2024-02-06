/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/car-showcase",
  images: {
    domains: ["cdn.imagin.studio"],
    unoptimized: true,
  },
};

export default nextConfig;
