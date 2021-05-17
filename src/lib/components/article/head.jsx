import Head from 'next/head'

export function ArticleHead({ title = '', summary = '', coverUrl = null }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Gustavo Santos" />
      <meta charSet="utf-8" />
      <meta name="description" content={summary} />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={summary} key="ogdescription" />
      <meta
        property="og:image"
        content={
          coverUrl
            ? `https://gustavosantos.dev${coverUrl}`
            : 'https://gustavosantos.dev/images/profile.jpg'
        }
        key="ogimage"
      />
      <meta
        property="og:image:alt"
        content="Banner da página."
        key="ogimagealt"
      />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:site_name" content="Gustavo Santos" key="ogsitename" />
      <meta property="og:locale" content="pt_BR" key="ogLocale" />
      <meta name="twitter:title" content={title} key="twTitle" />
      <meta name="twitter:description" content={summary} key="twDescription" />
      <meta
        name="twitter:image"
        content={
          coverUrl
            ? `https://gustavosantos.dev${coverUrl}`
            : 'https://gustavosantos.dev/images/profile.jpg'
        }
        key="twImage"
      />
      <meta name="twitter:card" content="summary_large_image" key="twCard" />
      <meta name="twitter:creator" content="@gufs0z" key="twCreator" />
      <meta name="theme-color" content="rgb(255,255,255)" />
    </Head>
  )
}
