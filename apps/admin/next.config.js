const withTM = require("next-transpile-modules")(["@dongmikim/lib"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
