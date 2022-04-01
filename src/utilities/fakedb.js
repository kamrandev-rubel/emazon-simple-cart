const addToDb = id => {
    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    let quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
const getStoredCart = ()=>{
    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}

const removeFromDb = (id) => {
    const storedData = localStorage.getItem('shopping-cart')
    if (storedData) {
        const newStoredObject = JSON.parse(storedData)
        if (id in newStoredObject) {
            delete newStoredObject[id]
            localStorage.setItem('shopping-cart', JSON.stringify(newStoredObject))
        }
    }
}
// removeFromDb()
export { addToDb, getStoredCart, removeFromDb }