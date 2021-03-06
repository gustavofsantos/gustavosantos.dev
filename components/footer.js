export const Footer = () => (
  <footer className="flex flex-col items-center w-full pt-8 pb-4">
    <section className="flex justify-between items-start w-full pl-4 pr-4 md:max-w-lg lg:max-w-2xl md:p-0">
      <div className="flex flex-col">
        <p>Gustavo Santos © {new Date().getFullYear()}</p>
      </div>

      <div className="flex  justify-end items-center space-x-2 min-w-min">
        <a
          href="https://github.com/gustavofsantos"
          target="_blank"
          rel="noopener noreferer"
          className="underline "
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
  </footer>
)
