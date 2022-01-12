import { render, screen, fireEvent } from '@testing-library/react'

import ModalConfirm from './index'

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

    expect(
      screen.getByText('Deseja adicionar esse item aos favoritos?')
    ).toBeInTheDocument()
    expect(screen.getByText('Sim')).toBeInTheDocument()
    expect(screen.getByText('Nāo')).toBeInTheDocument()
  })

  it('should call function addToWishList', () => {
    props.onClose.mockClear()
    props.addToWishList.mockClear()

    render(
      <ModalConfirm
        addToWishList={props.addToWishList}
        onClose={props.onClose}
      />
    )

    const buttonConfirm = screen.getByText('Sim')

    fireEvent.click(buttonConfirm)

    expect(props.addToWishList).toHaveBeenCalled()
  })

  it('should call function onClose', () => {
    props.onClose.mockClear()
    props.addToWishList.mockClear()

    render(
      <ModalConfirm
        addToWishList={props.addToWishList}
        onClose={props.onClose}
      />
    )
    const buttonClose = screen.getByText('Nāo')

    fireEvent.click(buttonClose)
    expect(props.onClose).toHaveBeenCalled()
  })
})
