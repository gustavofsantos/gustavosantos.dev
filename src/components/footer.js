import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaDev } from 'react-icons/fa'
import { RiNpmjsFill } from 'react-icons/ri'

export const Footer = () => (
  <footer className="flex flex-col items-center w-full pt-8 pb-4 space-y-2">
    <div className="flex flex-col">
      <Link href="/">
        <p
          className="cursor-pointer px-8 py-2 transition-all duration-150 hover:bg-pink-300"
          role="a"
        >
          Gustavo Santos © {new Date().getFullYear()}
        </p>
      </Link>
    </div>
    <div className="flex justify-center items-center space-x-4 min-w-min">
      <a
        href="https://dev.to/gustavofsantos"
        target="_blank"
        rel="noopener noreferer"
        title="GitHub"
      >
        <FaDev />
      </a>
      <a
        href="https://github.com/gustavofsantos"
        target="_blank"
        rel="noopener noreferer"
        title="GitHub"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.npmjs.com/~gsantos"
        target="_blank"
        rel="noopener noreferer"
        title="npm"
      >
        <RiNpmjsFill />
      </a>
      <a
        href="https://twitter.com/gufs0z"
        target="_blank"
        rel="noopener noreferer"
        title="Twitter"
      >
        <FiTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/gfdsantos"
        target="_blank"
        rel="noopener noreferer"
        title="LinkedIn"
      >
        <FiLinkedin />
      </a>
    </div>
  </footer>
)
