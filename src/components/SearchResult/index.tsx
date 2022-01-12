import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <SearchResultItem item={results[index]} addToWishList={addToWishList} />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <h3>{totalPrice}</h3>

      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={results.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default SearchResult
