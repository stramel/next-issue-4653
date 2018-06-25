const webpack = require("webpack");
// const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const { withPlugins, optional } = require("next-compose-plugins");
// const withCSS = require('@zeit/next-css')
// const withProgress = require('next-progressbar')
// const withServiceWorker = require('next-offline')
// const cfg = require('./config')
const { version } = require("./package.json");

const nextConfig = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };
    }

    // Help minimize lodash dependency graph as well
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      "lodash-es": "lodash",
      "lodash.memoize": "lodash/memoize",
      "lodash.uniq": "lodash/uniq",
      "lodash.camelcase": "lodash/camelcase",
      "lodash.escaperegexp": "lodash/escapeRegExp",
      "lodash.merge": "lodash/merge"
    });

    config.plugins.push(
      // TODO: Convert to using EnvironmentPlugin
      new webpack.DefinePlugin({
        // "process.env.API_URL": JSON.stringify(cfg.api.url),
        // "process.env.API_REMOTE": JSON.stringify(cfg.api.remote),
        // "process.env.AUTH_URL": JSON.stringify(cfg.auth.url),
        "process.env.WEB_VERSION": JSON.stringify(version)
      })
    );

    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(ru)/)
    );

    if (dev) {
      config.output.crossOriginLoading = "anonymous";
    }

    return config;
  },
  onDemandEntries: {
    // on dev, since our pages are so expensive, lets keep them for 24 hours
    maxInactiveAge: 1000 * 60 * 60 * 24
  },
  distDir: ".next"
};

module.exports = withPlugins(
  [
    // [withCSS],
    // [
    //   withServiceWorker,
    //   {
    //     generateSw: false,
    //     dontAutoRegisterSw: true,
    //     workboxOpts: {
    //       swSrc: './service-worker.js',
    //     },
    //   },
    // ],
    // [
    //   optional(() => require('@zeit/next-bundle-analyzer')),
    //   {
    //     analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    //     analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    //     bundleAnalyzerConfig: {
    //       server: {
    //         analyzerMode: 'static',
    //         reportFilename: '../../analysis/server.html',
    //       },
    //       browser: {
    //         analyzerMode: 'static',
    //         reportFilename: '../analysis/client.html',
    //       },
    //       openAnalyzer: true,
    //     },
    //   },
    //   [PHASE_PRODUCTION_BUILD],
    // ],
    // [withProgress],
  ],
  nextConfig
);
