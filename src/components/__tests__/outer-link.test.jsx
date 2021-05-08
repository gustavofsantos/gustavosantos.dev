import { OuterLink } from '../outer-link'
import { render, screen } from '@testing-library/react'

describe(OuterLink.name, () => {
  test('should render the link to the outer page', () => {
    render(<OuterLink href="https://outer.page/path">the page</OuterLink>)

    const linkElem = screen.getByText('the page')
    expect(linkElem).toBeInTheDocument()
    expect(linkElem.getAttribute('rel')).toBe('noopener noreferer')
    expect(linkElem.getAttribute('target')).toBe('_blank')
  })
})
