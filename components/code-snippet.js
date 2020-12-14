import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const CodeSnippet = ({ children, language }) => (
  <SyntaxHighlighter
    language="javascript"
    style={tomorrow}
    showLineNumbers
    wrapLines
  >
    {children}
  </SyntaxHighlighter>
);

CodeSnippet.defaultProps = {
  language: "javascript",
};
