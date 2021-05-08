const MAX_MINUTES = 5

export function Coffees({ minutes = 1 }) {
  const items = new Array(minutes).fill(0)

  return (
    <div className="flex space-x-2">
      <span>Tempo de leitura:</span>
      {items.length <= 5 ? (
        items.map((_, index) => <span key={`coffee-${index}`}>☕</span>)
      ) : (
        <span>{items.length}x☕</span>
      )}
    </div>
  )
}
