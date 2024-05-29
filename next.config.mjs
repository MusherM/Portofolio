/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/Portofolio" : "",
  assetPrefix: isProd ? "/Portofolio/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isProd ? "/Portofolio" : "",
  },
};

export default nextConfig;
