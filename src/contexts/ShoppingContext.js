import React, { useEffect, useState } from "react"
const axios = require('axios').default


export const ShopContex = React.createContext();
export const ModalContext = React.createContext();

function ShoppingContext({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(setProducts, [])
    function setProducts() {
        if (!localStorage.getItem("allProducts")) {
            axios.get("https://fakestoreapi.com/products")
                .then((response) => {
                    localStorage.setItem("allProducts", JSON.stringify(response.data));
                    setAllProducts(response.data.map((product) => ({ ...product, selected: 0 })));
                })
        }
        else {
            setAllProducts(JSON.parse(localStorage.getItem("allProducts")).map((product) => ({ ...product, selected: 0 })));
        }
    }
    return (
        <ShopContex.Provider value={{ allProducts, setAllProducts, setProducts }}>
            <ModalContext.Provider value={{ cartVisible, setCartVisible }} >
                {children}
            </ModalContext.Provider>
        </ShopContex.Provider>
    )
}

export default ShoppingContext;