import fs from 'fs'
import { promisify } from 'util'

const readDir = promisify(fs.readdir)
const readFileStats = promisify(fs.stat)

const readFiles = async ({ basePath = 'pages/knowledge' }) => {
  const fileNames = await readDir(basePath)
  const [, pathPart] = basePath.split('pages')

  const all = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const href = `${pathPart}/` + slug
        const { mtime, atime } = await readFileStats(
          basePath + '/' + slug + '.mdx'
        )

        const data = await import(`../${basePath}/${slug}.mdx`)
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

export const ptFiles = readFiles({ basePath: 'pages/knowledge' })

export const enFiles = readFiles({ basePath: 'pages/en/knowledge' })

export const getAllSnippets = async () => {
  return [...(await ptFiles), ...(await enFiles)]
}
