import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXHelpers } from '../lib/mdx-helpers'

const components = {
  Image
}

export default function HomePage({ content, mdxSource }) {
  return (
    <div className="flex flex-col w-full justify-start items-center pb-64 pt-24 bg-cararra-500 dark:bg-nile-blue-800">
      <article className="prose prose-lg prose-blue text-gray-800 dark:text-gray-200">
        <MDXRemote {...mdxSource} components={{ ...components }} />
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = MDXHelpers.readFile('index')
  const { data, content } = MDXHelpers.parseFile(fileContent)
  const mdxSource = await MDXHelpers.serializeFile(content)

  return {
    props: {
      content: fileContent,
      mdxSource
    }
  }
}
