import Head from 'next/head'
import Link from 'next/link'
import { Footer } from "../components/footer";
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
          <h1 className="text-xl text-center border-b-4 border-yellow-300">
            Oi! 🤙
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0">
            <BlogSubtitle>
              Prazer em conhecer você
            </BlogSubtitle>

            <BlogParagraph>
              Eu sou bacharel em Engenharia de Computação pela UFPel e desenvolvedor web na <a href="https://after.sale">aftersale</a>. Minha paixão é desenvolver produtos sólidos que evoluem com facilidade e ajudar outras pessoas com programação e tecnologia em geral.
            </BlogParagraph>

            <BlogParagraph>
              Atualmente lido quase que o tempo toda com coisas relacionadas ao mundo JavaScript (entenda como Node, React, Jest, Testing Library, etc). Eu acredito fielmente que linguagens, frameworks e técnicas devem ser encaradas como ferramentas no meu cinto de ferramentas imaginário e, eventualmente, finito. Aliás, sou do time das linguagens dinâmicas e julgo a felicidade na programação com maior prioridade do que a performance do programa.
            </BlogParagraph>

            <BlogSubtitle>
              Links
            </BlogSubtitle>

            <BlogParagraph>
              Eu gosto bastante de escrever e consumir conteúdo escrito. Você pode encontrar mais posts meus no <OuterLink href="https://dev.to/gustavofsantos">dev.to</OuterLink> e <OuterLink href="https://medium.com/@gvfs">Medium</OuterLink>.
            </BlogParagraph>

            <BlogParagraph>
              No rodapé de quase todas as páginas você também vai encontrar links para as minhas páginas no Twitter, Npm, Github e LinkedIn, sinta-se a vontade para bater um papo 😉.
            </BlogParagraph>
          </section>
        </div>

        <Footer />
      </article>
    </>
  );
}
