import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/footer'
import { BlogSubtitle } from '../components/blog/blog-subtitle'
import { BlogParagraph } from '../components/blog/blog-paragraph'
import { OuterLink } from '../components/outer-link'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Sobre</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="poppins text-5xl font-bold text-center">Oi! 🤙</h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl">
            <BlogSubtitle>Prazer em conhecer você</BlogSubtitle>

            <BlogParagraph>
              Eu sou bacharel em Engenharia de Computação pela UFPel e
              desenvolvedor web na{' '}
              <OuterLink href="https://after.sale">aftersale</OuterLink>. Minha
              paixão é construir produtos sólidos que evoluem com facilidade e
              ajudar outras pessoas com programação e tecnologia em geral.
            </BlogParagraph>

            <BlogParagraph>
              Atualmente lido quase que o tempo todo com coisas relacionadas ao
              mundo JavaScript (entenda como TypeScript, Node, React, Jest,
              Testing Library, etc).
            </BlogParagraph>

            <BlogSubtitle>Links</BlogSubtitle>

            <BlogParagraph>
              Eu gosto bastante de escrever e consumir conteúdo escrito. Você
              pode encontrar mais posts meus no{' '}
              <OuterLink href="https://dev.to/gustavofsantos">dev.to</OuterLink>{' '}
              e <OuterLink href="https://medium.com/@gvfs">Medium</OuterLink>.
            </BlogParagraph>

            <BlogParagraph>
              No rodapé de quase todas as páginas você também vai encontrar
              links para as minhas páginas no Twitter, Npm, Github e LinkedIn,
              sinta-se a vontade para bater um papo 😉.
            </BlogParagraph>
          </section>
        </div>

        <Footer />
      </article>
    </>
  )
}
