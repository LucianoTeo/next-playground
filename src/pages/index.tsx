import { useCallback, useState } from 'react'

import SearchResult from '../components/SearchResult'
import FormComponent from '../components/Form'

import { fetchItemsByName } from '../http/api/fetch/items'
import { addItemToWishList } from '../http/api/post/items'

import handleError from '../http/errors'

import { ItemResponse } from '../types/item'

export default function Home() {
  const [loading, setLoading] = useState(false)

  const [results, setResults] = useState<ItemResponse>({
    data: [],
    totalPrice: '0',
  })

  const [wishList, setWishList] = useState([])

  async function handleSubmit(search: string): Promise<ItemResponse> {
    if (!search.trim()) {
      return
    }
    setLoading(true)

    try {
      const response = await fetchItemsByName({ name: search })
      setResults(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      handleError(error)
    }
  }

  const handleWishList = useCallback(
    async (id: number) => {
      setLoading(true)

      try {
        const response = await addItemToWishList(id)
        setWishList([...wishList, response])
        setLoading(false)
      } catch (error) {
        handleError(error)
        setLoading(false)
      }
    },
    [wishList]
  )

  return (
    <main>
      <FormComponent handleSubmit={handleSubmit} />

      <SearchResult
        isLoading={loading}
        results={results.data}
        totalPrice={results.totalPrice}
        addToWishList={handleWishList}
      />

      <h2>Wish List</h2>
      {wishList.map((item) => item.id)}
    </main>
  )
}
