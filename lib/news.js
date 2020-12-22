import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const newsDirectory = path.join(process.cwd(), 'news')

const readDir = promisify(fs.readdir)

export const getAllNews = async () => {
  const fileNames = await readDir('pages/news')

  const allNews = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const href = '/news/' + slug

        const data = await import(`../pages/news/${slug}.mdx`)
        return { slug, href, meta: data.meta }
      })
  )

  return allNews.reverse()
}
