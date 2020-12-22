import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { BlogPage } from './blog-page'
import { BlogTitle } from './blog-title'
import { BlogSubtitle } from './blog-subtitle'
import { BlogParagraph } from './blog-paragraph'
import CodeBlock from '../code-block'

export default function BlogLayout(props) {
  const components = {
    h1: BlogTitle,
    h2: BlogSubtitle,
    p: BlogParagraph,
    code: CodeBlock
  }

  return (
    <>
      <Head>
        <html lang="pt_BR" />
        <title>{props.meta.title}</title>
        <meta name="author" content="Gustavo F dos Santos" />
        <meta charSet="utf-8" />
        <meta name="description" content={props.meta.excerpt} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:title" content={props.meta.title} key="ogtitle" />
        <meta
          property="og:description"
          content={props.meta.excerpt}
          key="ogdescription"
        />
        <meta
          property="og:image"
          content="https://gustavosantos.dev/images/profile.jpg"
          key="ogimage"
        />
        <meta
          property="og:image:alt"
          content="Banner do site. É uma foto da minha face."
          key="ogimagealt"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:site_name"
          content="Gustavo Santos"
          key="ogsitename"
        />
        <meta property="og:locale" content="pt_BR" key="ogLocale" />
        <meta name="twitter:title" content={props.meta.title} key="twTitle" />
        <meta
          name="twitter:description"
          content={props.meta.excerpt}
          key="twDescription"
        />
        <meta
          name="twitter:image"
          content="https://gustavosantos.dev/images/profile.jpg"
          key="twImage"
        />
        <meta name="twitter:card" content="summary_large_image" key="twCard" />
        <meta name="twitter:creator" content="@gufs0z" key="twCreator" />
        <meta name="theme-color" content="rgb(255,255,255)" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
          key="serifFont"
        />
      </Head>
      <MDXProvider components={components}>
        <BlogPage {...props} />
      </MDXProvider>
    </>
  )
}