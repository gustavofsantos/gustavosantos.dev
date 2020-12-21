import Head from 'next/head'
import Image from 'next/image'
import { BlogHeadImage } from './blog-head-image'
import { Footer } from '../footer'

export const BlogPage = ({
  children,
  title,
  resume,
  imgPath,
  imgAlt,
  imgAuthorName,
  imgAuthorHref,
  lang
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Gustavo Santos" />
      <meta charSet="UTF-8" />
      <meta name="description" content={resume ?? title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={resume ?? title}
      />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={resume ?? ''} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="@gvfs0z" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    </Head>
    {!!imgPath && (
      <BlogHeadImage
        path={imgPath}
        alt={imgAlt}
        authorName={imgAuthorName}
        authorHref={imgAuthorHref}
      />
    )}
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
