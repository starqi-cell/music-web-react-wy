const path = require('path')
const { Component } = require('react')
const CracoLessPlugin=require('craco-less')
const plugin = require('eslint-plugin-react')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Component: resolve('src/components'),
    },
  },
}
