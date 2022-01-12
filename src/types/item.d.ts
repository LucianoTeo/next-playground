export interface Item {
  id: number
  title: string
  price: number
  priceFormatted?: string
}

export interface ItemResponse {
  data: Array<Item>
  totalPrice: string
}

export interface SearchResultProps {
  results: Array<Item>
  totalPrice: string
  addToWishList: (id: number) => Promise<void>
  isLoading: boolean
}

export interface SearchResultItemProps {
  item: Item
  addToWishList: (id: number) => Promise<void>
}
