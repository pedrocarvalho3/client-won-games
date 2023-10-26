import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  newGamesTitle: 'New Games',
  mostPopularHighlight: highlightMock,
  mostPopularGamesTitle: 'Most Popular',
  mostPopularGames: gamesMock,
  upcommingGamesTitle: 'Upcomming Games',
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Showcase mock"></div>
  }
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="BannerSlider mock"></div>
  }
}))

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('BannerSlider mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase mock')).toHaveLength(4)
  })
})
