import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'

export const MDXHelpers = {
  readFile: (path) => fs.readFileSync(`./data/${path}.mdx`, 'utf-8'),

  parseFile: (content = '') => matter(content),

  serializeFile: (content = '') =>
    serialize(content, {
      mdxOptions: {
        remarkPlugins: [
          require('remark-autolink-headings'),
          require('remark-code-titles')
        ],
        rehypePlugins: [mdxPrism]
      }
    })
}
