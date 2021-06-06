const MAX_MINUTES = 5

export function Coffees({ minutes = 1, message }) {
  const items = new Array(Math.ceil(minutes / 3)).fill(0)

  return (
    <div className="flex space-x-2" title={`${message} ${minutes} min`}>
      <span>{message}</span>
      {items.length <= 5 ? (
        items.map((_, index) => <span key={`coffee-${index}`}>☕</span>)
      ) : (
        <span>{items.length}x☕</span>
      )}
    </div>
  )
}

Coffees.defaultProps = {
  message: 'Tempo de leitura:'
}
