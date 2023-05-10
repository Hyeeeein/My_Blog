/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["themes.estudiopatagon.com"],
  },
  experimental: {
    appDir: true,
  },
  webpack(config, { dev }) {
    if (!dev) {
      const opts = config.plugins.filter(
        (p) => p.constructor.name === "UglifyJsPlugin"
      )[0].options;
      config.plugins = config.plugins.filter(
        (p) => p.constructor.name !== "UglifyJsPlugin"
      );
      config.plugins.push(
        new ParallelUglifyPlugin({
          cacheDir: "/tmp",
          uglifyJS: opts,
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
