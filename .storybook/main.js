const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
  webpack: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')],
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            prependData: '@import "assets/scss/imports";',
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src')],
            },
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
};
