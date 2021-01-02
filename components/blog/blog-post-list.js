import { BlogPostCard } from './blog-post-card'

export const BlogPostList = ({ posts }) => (
  <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl md:p-0 divide-y divide-gray-200 dark:divide-gray-800">
    {posts.map((post) => (
      <BlogPostCard
        key={post.href}
        title={post.meta.title}
        resume={post.meta.excerpt}
        href={post.href}
      />
    ))}
  </section>
)
