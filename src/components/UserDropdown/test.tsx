import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })

  // it('should render the menu', () => {
  //   renderWithTheme(<UserDropdown username="John Doe" />)

  //   // open menu
  //   userEvent.click(screen.getByText(/john doe/i))

  //   expect(
  //     screen.getByRole('link', { name: /my profile/i })
  //   ).toBeInTheDocument()
  //   expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
  //   expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  // })
})
