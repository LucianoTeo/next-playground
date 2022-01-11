import { SearchResultItem } from '../SearchResultItem'

interface SearchResultProps {
  results: Array<{
    id: number
    title: string
    price: number
    priceFormatted: string
  }>
  totalPrice: string
  addToWishList: (id: number) => Promise<void>
}

function SearchResult({
  totalPrice,
  results,
  addToWishList,
}: SearchResultProps) {
  return (
    <div>
      <h3>{totalPrice}</h3>
      {results.map((result) => (
        <SearchResultItem
          key={result.id}
          product={result}
          addToWishList={addToWishList}
        />
      ))}
    </div>
  )
}

export default SearchResult
