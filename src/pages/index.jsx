import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXHelpers } from '../lib/mdx-helpers'

const appsUrl = [
  {
    name: 'Timer',
    description:
      'Contador simples com a possibilidade de pausar e parar a contagem.',
    tech: '💻 React, Next.js, Xstate',
    url: 'timer.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/timer-xstate-demo'
  },
  {
    name: 'Clipboard',
    description: 'Uma área de transferência simples.',
    tech: '💻 React, Next.js, Firebase, TailwindCSS',
    url: 'clipboard.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/web-clipboard-next'
  },
  {
    name: 'Hell Yes or No',
    description: 'Decida rapidamente se você deve ou não fazer alguma coisa.',
    tech: '💻 React, Aleph.js, Xstate',
    url: 'hyon.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/aleph-hell-yes-or-no'
  },
  {
    name: 'Pomodoro timer',
    description: 'App para trabalhar com foco e qualidade',
    tech: '💻 React, Next.js, TypeScript, TailwindCSS',
    url: 'pomodoro.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/pomodoro-web'
  },
  {
    name: 'Shhh',
    description: 'Compartilhe segredos sem medo',
    tech: '💻 React, Next.js, TailwindCSS',
    url: 'shhh.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/shhh'
  }
]

const components = {
  Image
}

export default function HomePage({ content, mdxSource }) {
  return (
    <div className="flex flex-col w-full justify-start items-center pb-64 pt-24 bg-white">
      <article className="segoe-font prose prose-lg prose-blue">
        <MDXRemote {...mdxSource} components={{ ...components }} />
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = MDXHelpers.readFile('index')
  const { data, content } = MDXHelpers.parseFile(fileContent)
  const mdxSource = await MDXHelpers.serializeFile(content)

  return {
    props: {
      content: fileContent,
      mdxSource
    }
  }
}
