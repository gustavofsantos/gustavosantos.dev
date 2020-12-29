import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)

export const getAllSnippets = async () => {
  const fileNames = await readDir('pages/snippets')

  const allNews = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const href = '/snippets/' + slug

        const data = await import(`../pages/snippets/${slug}.mdx`)
        return { slug, href, meta: data.meta }
      })
  )

  return allNews.reverse()
}
