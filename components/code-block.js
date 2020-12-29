import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'

function Pre({ children, className, ...props }) {
  return (
    <pre {...props} className={className + ' overflow-x-auto rounded-md'}>
      {children}
    </pre>
  )
}

function LineNo({ n }) {
  return (
    <span className="table-cell text-right pr-4 select-none opacity-50">
      {n + 1}
    </span>
  )
}

function LineContent({ children }) {
  return <span className="table-cell">{children}</span>
}

function Line({ children }) {
  return <div className="table-row">{children}</div>
}

export default function CodeBlock({ children, className, label, lines }) {
  const language = className ? className.replace(/language-/, '') : ''

  return (
    <div className="mt-4 mb-4">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.slice(0, -1).map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                {!!lines && <LineNo n={i} />}
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
      {!!label && (
        <div className="flex justify-center items-center pb-4 pt-2">
          <span className="text-sm italic serif text-gray-600">{label}</span>
        </div>
      )}
    </div>
  )
}
