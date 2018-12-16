const withOffline = require("next-offline");
const path = require('path');

module.exports = withOffline({
  generateSw: false,
  workboxOpts: {
    swDest: "./service-worker.js",
    swSrc: path.join(__dirname, "./service-worker/index.js"),
    globPatterns: ['static/**/*'],
    globDirectory: '.'
  },

  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
