const addToDb = (id) => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shoppingCart");
    // check if cart has item already added.
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

export { addToDb };
