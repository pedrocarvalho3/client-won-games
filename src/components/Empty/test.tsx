import { screen } from '@testing-library/react'

import Empty from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'title',
  description: 'description'
}

describe('<Empty />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(screen.getByText(/description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
