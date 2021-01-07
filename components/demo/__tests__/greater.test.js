import { Greater } from '../greater'
import { render, screen } from '@testing-library/react'

describe(Greater.name, () => {
  test('should great the name', () => {
    const name = 'George'
    render(<Greater name={name} />)
    screen.debug()
  })
})
