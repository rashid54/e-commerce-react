import React, {useEffect, useState } from "react"
const axios = require('axios').default


export const ShopContex = React.createContext();

function ShoppingContext({children}){
    const [allProducts,setAllProducts] = useState([]);

    useEffect(setProducts, [])
    function setProducts(){
        if(!localStorage.getItem("allProducts")){
            axios.get("https://fakestoreapi.com/products")
                .then((response)=>{
                    localStorage.setItem("allProducts", JSON.stringify(response.data));
                    setAllProducts(response.data.map((product)=>({...product, selected: 0})));
                })
        }
        else{
            setAllProducts(JSON.parse(localStorage.getItem("allProducts")).map((product)=>({...product, selected: 0})));
        }
    }
    return (
        <ShopContex.Provider value={{allProducts, setProducts }}>
            {children}
        </ShopContex.Provider>
    )
}

export default ShoppingContext;