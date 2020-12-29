import Head from 'next/head'
import { Footer } from '../components/footer'
import { BlogSubtitle } from '../components/blog/blog-subtitle'
import { BlogParagraph } from '../components/blog/blog-paragraph'
import { OuterLink } from '../components/outer-link'
import { InnerLink } from '../components/inner-link'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Sobre</title>
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Oi! 🤙
          </h1>
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
              Quer dar uma olhada em alguns dos projetos open source que eu já
              fiz e coloquei no ar? Checa a página{' '}
              <InnerLink href="/apps">apps</InnerLink>, espero que você encontre
              algo interessante!
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
