import { RadioGroup } from '../radio'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe(RadioGroup.name, () => {
  const setup = ({ onSelect }) => {
    const items = [
      { id: '123', label: 'Item A' },
      { id: 'abc', label: 'Item B' },
      { id: '666', label: 'Item C' }
    ]

    render(
      <RadioGroup onSelect={onSelect}>
        {items.map((item) => (
          <RadioGroup.Item key={item.id} id={item.id}>
            {item.label}
          </RadioGroup.Item>
        ))}
      </RadioGroup>
    )

    return { items }
  }

  test('should render all items', () => {
    const onSelect = jest.fn()
    const { items } = setup({ onSelect })

    for (const item of items) {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    }
  })

  test('should call the onSelect callback when click in item', () => {
    const onSelect = jest.fn()
    const { items } = setup({ onSelect })

    for (const item of items) {
      userEvent.click(screen.getByText(item.label))
      expect(onSelect).toBeCalledWith(item.id)
    }
  })
})
