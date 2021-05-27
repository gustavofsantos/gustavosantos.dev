import Link from 'next/link'
import Image from 'next/image'

const appsUrl = [
  {
    name: 'Timer',
    description:
      'Simple timer featuring pause, stop and resume. Build with state machines and generative tests.',
    tech: '💻 React, Next.js, Xstate',
    url: 'timer.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/timer-xstate-demo'
  },
  {
    name: 'Clipboard',
    description: 'A simple place to paste a content.',
    tech: '💻 React, Next.js, Firebase, TailwindCSS',
    url: 'clipboard.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/web-clipboard-next'
  },
  {
    name: 'Hell Yes or No',
    description:
      'When you need to make a decisions, use this app to hell yes do it or dont',
    tech: '💻 React, Aleph.js, Xstate',
    url: 'hyon.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/aleph-hell-yes-or-no'
  },
  {
    name: 'Pomodoro timer',
    description: 'Simply but beautiful pomodoro timer',
    tech: '💻 React, Next.js, TypeScript, TailwindCSS',
    url: 'pomodoro.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/pomodoro-web'
  },
  {
    name: 'Shhh',
    description: 'Share secretes using RSA and AES encriptation systems.',
    tech: '💻 React, Next.js, TailwindCSS',
    url: 'shhh.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/shhh'
  }
]

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center items-center pt-36 pb-36 text-coolGray-900 dark:text-coolGray-300 bg-white dark:bg-coolGray-900">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="mb-12 font-bold text-coolGray-900 dark:text-coolGray-50 text-3xl md:text-4xl lg:text-6xl">
          Hello, Gustavo here 👋
        </h1>

        <section>
          <p className="text-lg mb-6">
            I'm a curious person, developer, bread maker and kind a writter
            sometimes.
          </p>

          <p className="text-lg mb-6">This is my place in the internet 🌎.</p>

          <p className="text-lg mb-6">
            Eventually I write stuff in my{' '}
            <Link href="/en/a">
              <a>blog</a>
            </Link>
            .
          </p>

          <p className="text-lg mb-6">
            Here you will find some thoughts and links to stuff that I'm
            interesting in. This web site was built by me, to me. But ou might
            find something useful here.
          </p>

          <p className="text-lg mb-6">
            Currently I'm workning at{' '}
            <a
              href="https://after.sale"
              target="_blank"
              rel="noopener noreferrer"
            >
              aftersale
            </a>{' '}
            where I write code, help planning and executing deliveries and
            sometimes help people to grown in their careers.
          </p>

          <p className="text-lg mb-6">
            If you want, you can send me a DM at{' '}
            <a
              href="https://twitter.com/gufs0z"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            . Be free to{' '}
            <a
              href="mailto:gustavogustav54@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-mail
            </a>{' '}
            me if you want.
          </p>
        </section>

        <section data-testid="apps-section">
          <h2 className="text-3xl font-bold text-coolGray-900 dark:text-coolGray-50 mb-4 mt-4">
            Open source projects
          </h2>

          <div className="flex flex-col space-y-4">
            {appsUrl.map((description) => (
              <div className="flex flex-col space-y-4">
                <div className="w-full">
                  <div className="rounded-lg shadow-lg mb-2">
                    <Image
                      src={`/images/${description.url}_.png`}
                      layout="responsive"
                      width={1328}
                      height={954}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{description.name}</h3>
                    <p>{description.description}</p>
                    <p>{description.tech}</p>

                    <div className="flex space-x-2">
                      <a
                        href={`https://${description.url}`}
                        target="_blank"
                        rel="noopener norefereer"
                      >
                        Access
                      </a>
                      <a
                        href={description.githubUrl}
                        target="_blank"
                        rel="noopener norefereer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </article>
  )
}
