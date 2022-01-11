import { memo } from 'react'

interface SearchResultItemProps {
  product: {
    id: number
    title: string
    price: number
    priceFormatted: string
  }
  addToWishList: (id: number) => Promise<void>
}

function SearchResultItemComponent({
  product,
  addToWishList,
}: SearchResultItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type="button" onClick={() => addToWishList(product.id)}>
        Add to wish list
      </button>
    </div>
  )
}

export const SearchResultItem = memo(
  SearchResultItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
)
