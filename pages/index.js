import { OuterLink } from '../components/outer-link'

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center items-center pt-36 pb-36 text-coolGray-900 dark:text-coolGray-300 bg-white dark:bg-coolGray-900">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="style-display mb-12 font-bold text-coolGray-900 dark:text-coolGray-50 text-3xl md:text-4xl lg:text-6xl">
          Hi there 👋
        </h1>

        <h3 className="style-display mb-8 font-semibold text-2xl text-coolGray-700 dark:text-coolGray-200">
          My name is Gustavo Santos. I'm the tech guy that likes to turn ideas
          into code.
        </h3>

        <p className="text-lg mb-6">
          This is my place in the internet. My digital garden. Here you will
          find some words and links about things that interests me. It's build
          by me, for me. But you might find something nice here.
        </p>

        <p className="text-lg mb-6">
          My job at <OuterLink href="https://after.sale">aftersale</OuterLink>{' '}
          involves write code, plan user stories and help other developers to
          grow in their careers.
        </p>

        <p className="text-lg mb-6">
          If you want, you cou can reach me at{' '}
          <OuterLink href="https://twitter.com/gufs0z">twitter</OuterLink> or
          you can send me an{' '}
          <OuterLink href="mailto:gustavogustav54@gmail.com">email</OuterLink>.
        </p>

        <div className="border border-coolGray-500 mb-12" />

        <h2 className="style-display text-3xl font-bold text-coolGray-900 dark:text-coolGray-50 mb-4 mt-4">
          Open-source projects
        </h2>

        <section className="space-y-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
              <a
                href="https://clipboard.gustavosantos.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Clipboard
              </a>
            </h3>
            <p>An easy and simple clipboard across browsers.</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
              <a
                href="https://shhh.gustavosantos.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shhh
              </a>
            </h3>
            <p>
              Cryptographically secure secret sharing.{' '}
              <OuterLink href="https://https://github.com/gustavofsantos/shhh">
                Source code.
              </OuterLink>
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
              <a
                href="https://timer.gustavosantos.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quick timer
              </a>
            </h3>
            <p>
              Simple and easy timer written using state machines.{' '}
              <OuterLink href="https://github.com/gustavofsantos/timer-xstate-demo">
                Source code
              </OuterLink>
              .
            </p>
          </div>
        </section>
      </section>
    </article>
  )
}
