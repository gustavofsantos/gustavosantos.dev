export const OuterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-700 underline"
    target="_blank"
    rel="noopener noreferer"
  >
    {children}
  </a>
)
