import { InnerLink } from '../inner-link'
import { render, screen } from '@testing-library/react'

describe(InnerLink.name, () => {
  test('should render the link to the inner page', () => {
    render(<InnerLink href="/that/path">the page</InnerLink>)

    expect(screen.getByText('the page')).toBeInTheDocument()
  })
})
