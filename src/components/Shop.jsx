import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utility/fakeDB";

const Shop = () => {
    const productData = useLoaderData();

    const handleAddToCart = (id) => {
        addToDb(id);
    };

    return (
        <div className="product-container">
            {productData.map((product) => (
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
