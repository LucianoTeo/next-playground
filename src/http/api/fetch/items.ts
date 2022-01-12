import { currency, sumTotalPriceItems } from '../../../utils'

import { Item } from '../../../types/item'

interface Request {
  name: string
}

interface Response {
  data: Array<Item>
  totalPrice: string
}

export async function fetchItemsByName({ name }: Request): Promise<Response> {
  const response = await fetch(`http://localhost:3333/products?q=${name}`)
  const data = await response.json()

  const items: Item[] = data.map((item: Item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      priceFormatted: currency().format(item.price),
    }
  })

  const totalPrice = sumTotalPriceItems(items)

  return { data: items, totalPrice }
}
