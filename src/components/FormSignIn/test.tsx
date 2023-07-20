import { screen } from '@testing-library/react'

import FormSignIn from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    // verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    // verifique button
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    // verifique text
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()

    // verifique link
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
