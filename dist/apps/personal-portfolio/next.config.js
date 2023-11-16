//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('./.nx-helpers/compiled.js');

/**
 * @type {import('./.nx-helpers/compiled.js').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.APP_ENV === 'production',
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
