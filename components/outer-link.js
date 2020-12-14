export const OuterLink = ({ href, children }) => (
  <a href={href} className="underline" target="_blank" rel="noopener noreferer">
    {children}
  </a>
)
