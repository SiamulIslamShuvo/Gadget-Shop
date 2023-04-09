const addToDb = (id) => {
    let shoppingCart = {};
    // check if cart has item already added.
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity to shoppingCart.
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

// Get stored data from localStorage
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

// Remove a specific from local storage
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        }
    }
};

// clear data from local storage
const deleteShoppingCart = () => localStorage.removeItem("shoppingCart");

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
