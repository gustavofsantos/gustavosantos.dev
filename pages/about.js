import Head from 'next/head'
import Link from 'next/link'
import { Footer } from "../components/footer";
import { BlogSubtitle } from '../components/blog/blog-subtitle'
import { BlogParagraph } from '../components/blog/blog-paragraph'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | About</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="text-xl text-center border-b-4 border-yellow-300">
            Hello!
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0">
            <BlogSubtitle>
              Nice to meet you
            </BlogSubtitle>

            <BlogParagraph>
              I'm an bachelor in Computer Engineer and Web Developer actually working at 
              <a href="https://after.sale">aftersale</a>. My passion is help other
              developers with teaching and build rock solid products for end users.
            </BlogParagraph>

            <BlogParagraph>
              My currently tech stack is based in JavaScript tooling and functional programming. I believe
              that programming languages, frameworks and techniques should be faced as tools in your 
              imaginary toolbelt.
            </BlogParagraph>

          </section>
        </div>

        <Footer />
      </article>
    </>
  );
}
