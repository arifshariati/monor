//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withSentryConfig } = require("@sentry/nextjs")

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore
  org: process.env['NEXT_PUBLIC_SENTRY_ORG'],
  project: process.env['NEXT_PUBLIC_SENTRY_PROJECT'],

  // An auth token is required for uploading source maps.
  authToken: process.env['NEXT_PUBLIC_AUTH_TOKEN'],
  silent: true, // Suppresses all logs


  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};


const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

const composedConfig = composePlugins(...plugins)(nextConfig);
module.exports = withSentryConfig(composedConfig, sentryWebpackPluginOptions)
