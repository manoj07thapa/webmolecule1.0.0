/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "s.gravatar.com",
      "webmolecule100661227952508450fb98dfc9470061f1a123303-dev.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
