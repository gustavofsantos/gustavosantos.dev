const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = withMDX({
  i18n: {
    locales: ['pt', 'en-US'],
    defaultLocale: 'pt',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  productionBrowserSourceMaps: true,
})
