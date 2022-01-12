interface WishList {
  id: number
}

export async function addItemToWishList(id: number): Promise<WishList> {
  const data = {
    id: id,
  }

  return data
}
