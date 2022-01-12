import { render, screen, fireEvent } from '@testing-library/react'

import { SearchResultItem } from './index'

const FAKE_PROPS = {
  item: {
    id: 0,
    title: 'Title result',
    price: 80,
    priceFormatted: 'R$ 80,00',
  },
  addToWishList: jest.fn(),
}

describe('SearchResultItem component', () => {
  it('should render correctly', () => {
    render(
      <SearchResultItem
        addToWishList={FAKE_PROPS.addToWishList}
        item={FAKE_PROPS.item}
      />
    )

    const FAKE_TITLE = screen.getByText('Title result')
    const FAKE_PRICE_FORMMATER = screen.getByText('R$ 80,00')
    const BUTTON_WISH_LIST = screen.getByText('Add to wish list')

    expect(FAKE_TITLE).toBeInTheDocument()
    expect(FAKE_PRICE_FORMMATER).toBeInTheDocument()
    expect(BUTTON_WISH_LIST).toBeInTheDocument()
  })

  it('should not show modal on first moment', () => {
    render(
      <SearchResultItem
        addToWishList={FAKE_PROPS.addToWishList}
        item={FAKE_PROPS.item}
      />
    )

    const MODAL_TEXT = 'Deseja adicionar esse item aos favoritos?'

    expect(screen.queryByText(MODAL_TEXT)).not.toBeInTheDocument()
  })

  it('should open modal when click to add to wish list', () => {
    render(
      <SearchResultItem
        addToWishList={FAKE_PROPS.addToWishList}
        item={FAKE_PROPS.item}
      />
    )

    const MODAL_TEXT = 'Deseja adicionar esse item aos favoritos?'
    const BUTTON_WISH_LIST = screen.getByText('Add to wish list')

    expect(screen.queryByText(MODAL_TEXT)).not.toBeInTheDocument()

    fireEvent.click(BUTTON_WISH_LIST)

    expect(screen.queryByText(MODAL_TEXT)).toBeInTheDocument()
  })

  it('should close modal when click to close modal', () => {
    render(
      <SearchResultItem
        addToWishList={FAKE_PROPS.addToWishList}
        item={FAKE_PROPS.item}
      />
    )

    fireEvent.click(screen.getByText('Add to wish list'))

    const MODAL_TEXT = 'Deseja adicionar esse item aos favoritos?'

    expect(screen.queryByText(MODAL_TEXT)).toBeInTheDocument()

    const BUTTON_CLOSE = screen.getByText('Nāo')

    fireEvent.click(BUTTON_CLOSE)

    expect(screen.queryByText(MODAL_TEXT)).not.toBeInTheDocument()
  })
})
