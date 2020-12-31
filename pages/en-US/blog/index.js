import Head from 'next/head'
import { BlogPostCard } from '../../../components/blog/blog-post-card'

// posts
import { meta as testingReactHookForm } from './testing-react-hook-form.mdx'

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Blog</title>
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Blog
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl md:p-0 divide-y divide-gray-100 dark:divide-gray-800">
            <BlogPostCard
              title={testingReactHookForm.title}
              resume={testingReactHookForm.excerpt}
              href={testingReactHookForm.href}
            />
          </section>
        </div>
      </article>
    </>
  )
}
