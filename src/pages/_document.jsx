import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
            async
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                w[l] = w[l] || []
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                })
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : ''
                j.async = true
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
                f.parentNode.insertBefore(j, f)
              })(window, document, 'script', 'dataLayer', 'GTM-MJJHV4T')`
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MJJHV4T"
              height="0"
              width="0"
              style={{
                display: 'none',
                visibility: 'hidden'
              }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
