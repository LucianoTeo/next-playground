import { memo, useState } from 'react'
import dynamic from 'next/dynamic'

const ModalConfirm = dynamic(() => import('../modalConfirm'), {
  loading: () => <p>Carregando ...</p>,
})

interface SearchResultItemProps {
  item: {
    id: number
    title: string
    price: number
    priceFormatted: string
  }
  addToWishList: (id: number) => Promise<void>
}

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
