import Head from 'next/head'

import { getAllPosts } from '../../lib/blog'
import { BlogPostList } from '../../components/blog/blog-post-list'

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Blog</title>
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="style-display text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Blog
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <BlogPostList posts={posts} />
        </div>
      </article>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: { posts }
  }
}
