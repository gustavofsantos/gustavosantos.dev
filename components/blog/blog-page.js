import { Footer } from '../footer'

export const BlogPage = ({ children }) => (
  <>
    <article
      className="flex flex-col items-center pt-20 pb-40 w-full bg-white dark:bg-black"
      data-testid="blog-page"
    >
      <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-2xl md:p-0 bg-white dark:bg-black">
        {children}
      </section>
    </article>
    <Footer />
  </>
)
