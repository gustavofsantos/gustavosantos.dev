export function When({ children, value }) {
  if (typeof value === 'function' && !!value()) {
    return typeof children === 'function' ? children() : children
  }

  if (typeof value !== 'function' && !!value) {
    return typeof children === 'function' ? children() : children
  }

  return <></>
}
