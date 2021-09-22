import { useContext } from "react"
import { ShopContex } from "../contexts/ShoppingContext"


function Products(){
    const {allProducts, setProducts} = useContext(ShopContex);

    console.log("Inside product :", allProducts);
    return (allProducts)?(
        <div className="px-32 flex flex-wrap justify-around items-stretch">
            {
                allProducts.map((product)=>{
                    return (
                        <div className="w-3/12 p-6 px-16 bg-red-500">
                            <div className="p-3 h-full bg-gray-500">
                                <img className=" h-1/4" src={product.image} alt="product" />
                                <h4>{product.title}</h4>
                                <h6>{product.price}</h6>
                                <h6>{product.category}</h6>
                                <h6>{product.rating.rate}</h6>
                                <h6>{product.rating.count}</h6>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
    ):"Loading"
}

export default Products;