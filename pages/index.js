/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Page, PageContent } from "../styles/Page";

export default function Home() {
  return (
    <Page>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
        `}
      >
        <PageContent>
          <h1
            css={css`
              font-size: 5em;
              font-weight: 400;

              @media (max-width: 800px) {
                font-size: 3em;
              }
            `}
          >
            Hi! I'm Gustavo Santos. I turn ideas into JavaScript code.
          </h1>
          <h3
            css={css`
              font-weight: 400;
            `}
          >
            Web developer at{" "}
            <span
              css={css`
                font-weight: 700;
              `}
            >
              aftersale
            </span>
          </h3>
        </PageContent>
      </div>
    </Page>
  );
}
