import { render, screen } from '@testing-library/react'

import SearchResult from './index'

describe('SearchResult component', () => {
  const props = {
    results: [
      {
        id: 0,
        title: 'Title result',
        price: 80,
        priceFormatted: 'R$ 80,00',
      },
    ],
    totalPrice: '80000',
    addToWishList: jest.fn(),
  }

  it('should render correctly', () => {
    render(
      <SearchResult
        addToWishList={props.addToWishList}
        results={props.results}
        totalPrice={props.totalPrice}
      />
    )

    const totalPrice = screen.getByText('80000')

    expect(totalPrice).toBeInTheDocument()
  })
})
