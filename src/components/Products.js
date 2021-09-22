import { useContext } from "react"
import { ShopContex } from "../contexts/ShoppingContext"
import ProductCard from "./ProductCard";


function Products(){
    const {allProducts, setProducts} = useContext(ShopContex);

    console.log("Inside product :", allProducts);
    return (allProducts)?(
        <div className="px-32 flex flex-wrap justify-around items-stretch">
            {
                allProducts.map((product)=>{
                    return (
                        <div className="w-3/12 py-4 px-6 bg-red-500">
                            <ProductCard product={product} />
                        </div>
                    )
                })
            }
            
            
        </div>
    ):"Loading"
}

export default Products;