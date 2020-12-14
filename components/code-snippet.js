import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const CodeSnippet = ({
  children,
  language,
  showLineNumbers,
  wrapLines
}) => (
  <section className="text-sm pt-4 pb-4">
    <SyntaxHighlighter
      language="javascript"
      style={tomorrow}
      showLineNumbers={showLineNumbers}
      wrapLines={wrapLines}
    >
      {children}
    </SyntaxHighlighter>
  </section>
)

CodeSnippet.defaultProps = {
  language: 'javascript',
  showLineNumbers: true,
  wrapLines: true
}
