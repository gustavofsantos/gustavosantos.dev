import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'

export const readArticlesDir = () =>
  fs.readdirSync('./data/blog').map((filename) => filename.replace(/\.mdx/, ''))

export const readArticleBySlug = (slug) =>
  fs.readFileSync(`./data/blog/${slug}.mdx`, 'utf-8')

export const parseArticle = (content = '') => matter(content)

export const serializeArticle = (content = '') =>
  serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  })

export const orderArticlesByDate = (articles = []) =>
  articles.sort((a, b) => 
    // @ts-ignore
    new Date(b.publishedAt) - new Date(a.publishedAt) > 0 ?
    1 :
    -1
   )
