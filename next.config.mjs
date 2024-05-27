/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/Portofolio" : "",
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "https://musherm.github.io/Portofolio/",
  },
};

export default nextConfig;
