import { render, screen } from '@testing-library/react'
import { When } from '../when'

describe(When.name, () => {
  const Children = () => <span>Ok</span>

  test.each([
    [true],
    ['non empty string'],
    [{}],
    [{ a: 'b' }],
    [[]],
    [[1, 2, 3]],
    [1],
    [Symbol('hey')]
  ])(
    'should render the children when value is a truthy value (%s)',
    (value) => {
      render(
        <When value={value}>
          <Children />
        </When>
      )
      expect(screen.getByText(/ok/i)).toBeInTheDocument()
    }
  )

  test.each([
    [() => true],
    [() => 'non empty string'],
    [() => ({})],
    [() => ({ a: 'b' })],
    [() => []],
    [() => [1, 2, 3]],
    [() => 1],
    [() => Symbol('hey')]
  ])(
    'should render the children when value is a function that returns a truthy value (%s)',
    (value) => {
      render(<When value={value}>{() => <Children />}</When>)
      expect(screen.getByText(/ok/i)).toBeInTheDocument()
    }
  )

  test.each([[false], [0], ['']])(
    'should not render the children when the value is a non truthy value (%s)',
    (value) => {
      render(<When value={value}>{() => <Children />}</When>)
      expect(screen.queryByText(/ok/i)).toBeNull()
    }
  )

  test.each([[() => false], [() => 0], [() => '']])(
    'should not render the children when the value is a function that returns a non truthy value (%s)',
    (value) => {
      render(<When value={value}>{() => <Children />}</When>)
      expect(screen.queryByText(/ok/i)).toBeNull()
    }
  )
})
