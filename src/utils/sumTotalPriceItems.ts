import { Item } from '../types/item'

function sumTotalPriceItems(data: Item[]) {
  const totalPrice = data.reduce((total, result) => {
    return total + result.price
  }, 0)

  return String(totalPrice)
}

export default sumTotalPriceItems
