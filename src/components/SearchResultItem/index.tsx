import { memo, useState } from 'react'

import ModalConfirm from '../ModalConfirm'

import { SearchResultItemProps } from '../../types/item'

function SearchResultItemComponent({
  item,
  addToWishList,
}: SearchResultItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <strong>{item.title}</strong>

      <span>{item.priceFormatted}</span>

      <button type="button" onClick={() => setIsOpen(true)}>
        Add to wish list
      </button>

      {isOpen && (
        <ModalConfirm
          onClose={() => setIsOpen(false)}
          addToWishList={() => addToWishList(item.id)}
        />
      )}
    </div>
  )
}

export const SearchResultItem = memo(
  SearchResultItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.item, nextProps.item)
  }
)
