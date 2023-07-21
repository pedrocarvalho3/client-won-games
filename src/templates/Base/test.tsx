import { screen } from '@testing-library/react'

import Base from '.'
import { renderWithTheme } from 'utils/tests/helpers'

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Menu mock"></div>
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Footer mock"></div>
  }
}))

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Menu mock')).toBeInTheDocument()
    expect(screen.getByTestId('Footer mock')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
