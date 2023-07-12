const path = require('path');

module.exports = {
  webpack: (config, env) => {
    // Exclude the public folder from hot-reloading
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [path.resolve(__dirname, 'src/data/placeholders/vinyl')],
    };

    return config;
  },
};
