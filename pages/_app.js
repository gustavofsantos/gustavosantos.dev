import Head from "next/head";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Inter", sans-serif;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
      <Head>
        <title>Gustavo Santos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
