import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Modal from "./components/Modal";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
    // let [isopen, setIsOpen] = useState(false);
    const { cartArray, products } = useLoaderData();
    const [cart, setCart] = useState(cartArray);

    // const cartAlert = sessionStorage.getItem("Alert");
    // if (cart.length > 0 && cartAlert !== "true") {
    //     setIsOpen(true);
    //     sessionStorage.setItem("Alert", true);
    // }

    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header />
                <div className="min-h-[calc(100vh-137px)]">
                    <Outlet />
                </div>
                <Footer />
                {/* <Modal isopen={isopen} setIsOpen={setIsOpen} /> */}
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default App;
