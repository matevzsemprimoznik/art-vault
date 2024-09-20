'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        includePaths: ['app'],
        cacheInclude: [/.*\.hbs$/, /.*\.css$/, /.*\.html/, /.*\.scss$/],
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('autoprefixer'),
            options: {},
          },
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js',
            },
          },
        ],
      },
    },
  });

  return app.toTree();
};
