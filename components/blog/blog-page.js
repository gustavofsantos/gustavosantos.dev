import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../footer'

export const BlogPage = ({
  children,
  meta,
  customFooterMessage = 'Tenha um dia incrível.',
  customProfileHref = '/'
}) => (
  <>
    <article className="page" data-testid="blog-page">
      <section className="flex flex-col w-full justify-center items-center mb-12 space-y-4">
        <Link href={customProfileHref}>
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            className="rounded-full object-cover cursor-pointer"
            width={52}
            height={52}
          />
        </Link>
        <Link href={customProfileHref}>
          <span className="uppercase cursor-pointer text-gray-500">
            Gustavo Santos
          </span>
        </Link>
      </section>
      <section className="prose md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-200 page-contents">
        {!!meta && !!meta.createdAt && (
          <section className="flex w-full justify-center items-center">
            <p className="font-bold text-gray-500">
              {new Date(meta.createdAt).toLocaleDateString()}
            </p>
          </section>
        )}
        {children}

        <section className="flex flex-col w-full justify-center items-center pt-6">
          <span className="text-xl xl:text-3xl">✌</span>
          <p className="font-bold md:text-xl lg:text-2xl">
            {customFooterMessage}
          </p>
        </section>

        <section>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            {meta.tags.map((tagName) => (
              <Link key={meta.title + tagName} href={`/find?q=${tagName}`}>
                <span className="bg-green-200 text-green-900 mt-1 mb-1 pt-1 pb-1 pl-2 pr-2 cursor-pointer">
                  {tagName}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </article>
    <Footer />
  </>
)
