import { FormEvent, useCallback, useState } from 'react'

import SearchResult from '../components/SearchResult'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({
    totalPrice: '0',
    data: [],
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }
    try {
      const response = await fetch(`http://localhost:3333/products?q=${search}`)
      const data = await response.json()

      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })

      const items = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          priceFormatted: formatter.format(item.price),
        }
      })

      const totalPrice = data.reduce((total, result) => {
        return total + result.price
      }, 0)

      setResults({ totalPrice, data: items })
    } catch (error) {
      console.log(error)
    }
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">buscar</button>
      </form>

      <SearchResult
        results={results.data}
        totalPrice={results.totalPrice}
        addToWishList={addToWishList}
      />
    </>
  )
}
