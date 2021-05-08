const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = {
  productionBrowserSourceMaps: true,
  future: {
    webpack5: true
  }
}
