import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)

export const getAllPosts = async () => {
  const fileNames = await readDir('pages/blog')

  const all = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const href = '/blog/' + slug

        const data = await import(`../pages/blog/${slug}.mdx`)
        return { slug, href, meta: data.meta }
      })
  )

  return all.reverse()
}
