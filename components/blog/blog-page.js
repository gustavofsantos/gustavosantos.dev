import { Footer } from '../footer'

export const BlogPage = ({ children, meta }) => (
  <>
    <article
      className="flex flex-col items-center pt-20 pb-56 w-full bg-white dark:bg-coolGray-900"
      data-testid="blog-page"
    >
      <section className="flex flex-col w-full pl-4 pr-4 md:max-w-xl lg:max-w-3xl md:p-0 bg-white dark:bg-coolGray-900">
        {children}

        {!!meta && !!meta.createdAt && (
          <section className="flex w-full justify-end items-center pt-6">
            <span className="font-bold text-sm text-coolGray-700 dark:text-coolGray-500">
              Published in {new Date(meta.createdAt).toLocaleDateString()}
            </span>
          </section>
        )}
      </section>
    </article>
    <Footer />
  </>
)
