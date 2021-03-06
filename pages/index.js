export default function HomePage() {
  return (
    <article className="flex flex-col w-full h-full justify-center items-center">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="style-display mb-12 font-bold text-gray-900 text-3xl md:text-4xl lg:text-6xl">
          Hi there 👋
        </h1>

        <h3 className="style-display mb-8 font-semibold text-2xl text-gray-800">
          My name is Gustavo Santos. I'm the tech guy that likes to turn ideas
          into code.
        </h3>

        <p className="text-lg mb-6">
          This is my place in the internet. My digital garden. Here you will
          find some words and links about things that interests me. It's build
          by me, for me. But you might find something nice here.
        </p>

        <p className="text-lg mb-6">
          My job at{' '}
          <a href="https://after.sale" className="text-blueGray-600 underline">
            aftersale
          </a>{' '}
          involves write code, plan user stories and help other developers to
          grow in their careers.
        </p>

        <p className="text-lg mb-6">
          If you want, you cou can reach me at{' '}
          <a
            href="https://twitter.com/gufs0z"
            className="text-blueGray-600 underline"
          >
            twitter
          </a>{' '}
          or you can send me an{' '}
          <a
            href="mailto:gustavogustav54@gmail.com"
            className="text-blueGray-600 underline"
          >
            email
          </a>
          .
        </p>
      </section>
    </article>
  )
}
