import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utility/fakeDB";
import { CartContext, ProductContext } from "../App";
import { toast } from "react-hot-toast";

const Shop = () => {
    const products = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);
    console.log(products);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(
            (existingProduct) => existingProduct.id === product.id
        );
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter(
                (existingProduct) => existingProduct.id !== product.id
            );
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        toast.success("product Added Successfully! ✅");
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className="product-container">
            {products.map((product) => (
                <ProductCard
                    handleAddToCart={handleAddToCart}
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default Shop;
