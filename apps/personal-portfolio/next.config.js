//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.APP_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true
  },
    webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      punycode: require.resolve('punycode/'),
    };
    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
