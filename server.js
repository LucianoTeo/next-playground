module.exports = () => {
    const data =  {
        products: []
    }

    for (i = 0; i < 1000; i++) {
        data.products.push({
            id: i,
            title: `Camiseta ${i}`,
            price: 80
        })
    }

    return data
}