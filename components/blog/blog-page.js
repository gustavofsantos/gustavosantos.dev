import { Footer } from '../footer'

export const BlogPage = ({ children, meta }) => (
  <>
    <article
      className="flex flex-col items-center pt-20 pb-56 w-full bg-white dark:bg-black"
      data-testid="blog-page"
    >
      <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-2xl md:p-0 bg-white dark:bg-black">
        {children}

        {!!meta && !!meta.createdAt && (
          <section className="flex w-full justify-end items-center pt-6">
            <span className="serif italic text-sm text-gray-700">
              Publicado em {new Date(meta.createdAt).toLocaleDateString()}
            </span>
          </section>
        )}
      </section>
    </article>
    <Footer />
  </>
)
