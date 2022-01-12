import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = 'LoadableComponent'
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})

import { SearchResultItem } from './index'

describe('SearchResultItem component', () => {
  const props = {
    item: {
      id: 0,
      title: 'Title result',
      price: 80,
      priceFormatted: 'R$ 80,00',
    },
    addToWishList: jest.fn(),
  }

  it('should render correctly', () => {
    render(
      <SearchResultItem addToWishList={props.addToWishList} item={props.item} />
    )

    const title = screen.getByText('Title result')
    const priceFormatted = screen.getByText('R$ 80,00')

    expect(title).toBeInTheDocument()
    expect(priceFormatted).toBeInTheDocument()
  })

  it('should show modalConfirm when click to add to wish list', () => {
    const { debug } = render(
      <SearchResultItem addToWishList={props.addToWishList} item={props.item} />
    )

    const button = screen.getByText('Add to wish list')

    fireEvent.click(button)

    // update state

    debug()
  })
})
