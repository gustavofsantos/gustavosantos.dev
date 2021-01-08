import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)
const readFileStats = promisify(fs.stat)

export const getAllSnippets = async () => {
  const fileNames = await readDir('pages/knowledge')

  const all = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const href = '/knowledge/' + slug
        const { mtime, atime } = await readFileStats(
          'pages/knowledge/' + slug + '.mdx'
        )

        const data = await import(`../pages/knowledge/${slug}.mdx`)
        return {
          slug,
          href,
          meta: data.meta,
          createdAt: new Date(atime),
          updatedAt: new Date(mtime)
        }
      })
  )

  return all
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((post) => ({
      slug: post.slug,
      href: post.href,
      meta: post.meta,
      createdAt: post.createdAt.toString(),
      updatedAt: post.updatedAt.toString()
    }))
}
