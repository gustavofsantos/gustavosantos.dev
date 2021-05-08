import { createContext, useContext, useEffect, useState } from 'react'

type RadioItemId = number | string

type RadioState = [RadioItemId, (selectedItem: RadioItemId) => void]

const RadioGroupContext = createContext<RadioState>(null)

export const RadioGroup = ({ children, onSelect }) => {
  const [selected, setSelected] = useState<RadioItemId>(undefined)

  useEffect(() => {
    onSelect(selected)
  }, [selected])

  return (
    <RadioGroupContext.Provider value={[selected, setSelected]}>
      {children}
    </RadioGroupContext.Provider>
  )
}

const Item = ({ id, children }) => {
  const [selected, setSelected] = useContext(RadioGroupContext)

  const handleSelect = () => setSelected(id)

  return (
    <label className="flex justify-start items-center">
      <input
        value={id}
        type="radio"
        checked={selected === id}
        onChange={handleSelect}
        className="mr-2"
      />
      {children}
    </label>
  )
}

RadioGroup.Item = Item
