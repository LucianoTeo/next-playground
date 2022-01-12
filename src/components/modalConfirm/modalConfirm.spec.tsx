import { render, screen, fireEvent } from '@testing-library/react'

import ModalConfirm from '.'

describe('ModalConfirm component', () => {
  const props = {
    addToWishList: jest.fn(),
    onClose: jest.fn(),
  }

  it('should render correctly', () => {
    render(
      <ModalConfirm
        addToWishList={props.addToWishList}
        onClose={props.onClose}
      />
    )

    const MODAL_TEXT = 'Deseja adicionar esse item aos favoritos?'

    expect(screen.getByText(MODAL_TEXT)).toBeInTheDocument()
    expect(screen.getByText('Sim')).toBeInTheDocument()
    expect(screen.getByText('Nāo')).toBeInTheDocument()
  })

  it('should call function addToWishList when click YES', () => {
    props.onClose.mockClear()
    props.addToWishList.mockClear()

    render(
      <ModalConfirm
        addToWishList={props.addToWishList}
        onClose={props.onClose}
      />
    )

    const BUTTON_CONFIRM = screen.getByText('Sim')

    fireEvent.click(BUTTON_CONFIRM)

    expect(props.addToWishList).toHaveBeenCalled()
  })

  it('should call function onClose when click NO', () => {
    props.onClose.mockClear()
    props.addToWishList.mockClear()

    render(
      <ModalConfirm
        addToWishList={props.addToWishList}
        onClose={props.onClose}
      />
    )

    const BUTTON_CLOSE = screen.getByText('Nāo')

    fireEvent.click(BUTTON_CLOSE)

    expect(props.onClose).toHaveBeenCalled()
  })
})
