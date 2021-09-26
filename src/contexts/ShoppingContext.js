import React, { useEffect, useState } from "react"
const axios = require('axios').default


export const ShopContex = React.createContext();
export const ModalContext = React.createContext();

function ShoppingContext({ children }) {
    const [cartProducts, setCartProducts] = useState({});
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(setAllProducts, [])

    function getCategories(allProducts) {
        return allProducts.reduce((categories, product) => {
            return categories.some(category => category === product.category) ? categories : [...categories, product.category]
        }, []);
    }
    
    function setAllProducts() {
        if ((!localStorage.getItem("allProducts"))||(!localStorage.getItem("categories"))) {
            axios.get("https://fakestoreapi.com/products")
                .then((response) => {
                    const allProducts = response.data;
                    const categories = getCategories(allProducts);

                    localStorage.setItem("allProducts", JSON.stringify(allProducts));
                    localStorage.setItem("categories", JSON.stringify(categories)); 
                    setCartProducts({});
                })
                .catch(error=>{
                    
                })
        }
    }
    return (
        <ShopContex.Provider value={{ cartProducts, setCartProducts}}>
            <ModalContext.Provider value={{ cartVisible, setCartVisible }} >
                {children}
            </ModalContext.Provider>
        </ShopContex.Provider>
    )
}

export default ShoppingContext;