import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

import { SearchResultItem } from '../SearchResultItem'
import Loader from '../Loader'

import { SearchResultProps } from '../../types/item'

function SearchResult({
  totalPrice,
  results,
  addToWishList,
  isLoading,
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
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: '100vh' }}>
          <h3>{totalPrice}</h3>
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height || 100}
                width={width || 100}
                rowCount={results.length}
                rowHeight={40}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        </div>
      )}
    </div>
  )
}

export default SearchResult
