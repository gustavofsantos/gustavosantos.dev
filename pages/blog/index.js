import Head from 'next/head'
import { BlogPostCard } from '../../components/blog/blog-post-card'

// posts
import { metadata as postJsClassTipBind } from './tip-js-class-bind'
import { meta as nodeMongoSetupTests } from './node-mongo-setup-tests.mdx'
import { meta as tsReadonlyType } from './ts-readonly-type.mdx'

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | O Blog</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="text-xl text-center border-b-4 border-yellow-300">
            O Blog
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl md:p-0 divide-y divide-gray-100 dark:divide-gray-800">
            <BlogPostCard
              title={nodeMongoSetupTests.title}
              resume={nodeMongoSetupTests.excerpt}
              href={nodeMongoSetupTests.href}
            />

            <BlogPostCard
              title={tsReadonlyType.title}
              resume={tsReadonlyType.excerpt}
              href={tsReadonlyType.href}
            />

            <BlogPostCard
              title={postJsClassTipBind.title}
              resume={postJsClassTipBind.resume}
              href={postJsClassTipBind.href}
            />
          </section>
        </div>
      </article>
    </>
  )
}
