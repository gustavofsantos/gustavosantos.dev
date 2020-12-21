export const Footer = () => (
  <footer className="flex flex-col items-center w-full pt-8 border-t border-gray-100 bg-gray-50">
    <section className="flex justify-between items-start w-full pl-4 pr-4 md:max-w-lg lg:max-w-2xl md:p-0">
      <div className="flex flex-col">
        <h3 className="font-bold text-lg pb-6">Gustavo Santos</h3>

        <span>Obrigado por ler.</span>
      </div>

      <div className="flex flex-col justify-start items-start space-y-2 min-w-min">
        <h3>Links</h3>
        <a
          href="https://github.com/gustavofsantos"
          target="_blank"
          rel="noopener noreferer"
          className="underline"
        >
          github
        </a>
        <a
          href="https://www.npmjs.com/~gsantos"
          target="_blank"
          rel="noopener noreferer"
          className="underline"
        >
          npm
        </a>
        <a
          href="https://twitter.com/gufs0z"
          target="_blank"
          rel="noopener noreferer"
          className="underline"
        >
          twitter
        </a>
        <a
          href="https://www.linkedin.com/in/gfdsantos"
          target="_blank"
          rel="noopener noreferer"
          className="underline"
        >
          linkedin
        </a>
      </div>
    </section>
    <section className="pt-4 pb-12">
      <span className="italic text-sm">
        © 2020-present Gustavo F dos Santos. All Rights Reserved.
      </span>
    </section>
  </footer>
)
