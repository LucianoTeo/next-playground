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
    totalPrice: '80',
    addToWishList: jest.fn(),
  }

  it('should render list correctly', () => {
    render(
      <SearchResult
        isLoading={false}
        addToWishList={props.addToWishList}
        results={props.results}
        totalPrice={props.totalPrice}
      />
    )

    const TOTAL_PRICE = screen.getByText('80')
    const LOADING = screen.queryByText('Carregando...')

    expect(TOTAL_PRICE).toBeInTheDocument()
    expect(LOADING).not.toBeInTheDocument()
  })

  it('should render loading list correctly', () => {
    render(
      <SearchResult
        isLoading={true}
        addToWishList={props.addToWishList}
        results={props.results}
        totalPrice={props.totalPrice}
      />
    )

    const TOTAL_PRICE = screen.queryByText('80')
    const LOADING = screen.queryByText('Carregando...')

    expect(TOTAL_PRICE).not.toBeInTheDocument()
    expect(LOADING).toBeInTheDocument()
  })
})
