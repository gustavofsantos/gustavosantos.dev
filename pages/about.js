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
        <title>Gustavo Santos | About</title>
      </Head>
      <article className="flex flex-col items-center bg-white dark:bg-coolGray-900">
        <section className="pt-20 pb-10">
          <h1 className="style-display text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Hey! 🤙
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl">
            <BlogSubtitle>Nice to meet you</BlogSubtitle>

            <BlogParagraph>
              I'm Computer Engineer (bachelor) and web developer. My passion is
              build rock solid products that you could easily bend without
              break.
            </BlogParagraph>

            <BlogParagraph>
              I deal almost all the time with JavaScript stuff (such as React,
              Node, Jest, Testing Library) and TypeScript, MongoDB, and all
              common web stuff.
            </BlogParagraph>

            <BlogSubtitle>Links</BlogSubtitle>

            <BlogParagraph>
              I like a lot of writing, but bear with me with my english skills,
              it's not my native language. You can find more of my content at{' '}
              <OuterLink href="https://dev.to/gustavofsantos">dev.to</OuterLink>{' '}
              and <OuterLink href="https://medium.com/@gvfs">Medium</OuterLink>.
            </BlogParagraph>

            <BlogParagraph>
              Want to see some of my open source project that I have deployed?
              Checkout this <InnerLink href="/apps">apps page</InnerLink>, I
              hope that you find something useful or, at least, interesting.
            </BlogParagraph>

            <BlogParagraph>
              In the footer of almost all pages you will find links to my social
              networks. Be free to join in a conversation with me, I will be
              really happy to meet you!
            </BlogParagraph>
          </section>
        </div>

        <Footer />
      </article>
    </>
  )
}
