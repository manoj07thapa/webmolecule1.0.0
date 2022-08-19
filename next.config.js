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
      "webmolecule100a175292d10ad4cb6b4799b41654358a9113224-dev.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
