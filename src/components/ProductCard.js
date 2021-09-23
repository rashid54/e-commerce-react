import { useContext } from "react";
import { ShopContex } from "../contexts/ShoppingContext";


function ProductCard({product}){
    const {allProducts, setAllProducts} = useContext(ShopContex);

    function setSelectedCount(value){
        setAllProducts(allProducts.map((productx)=>{
            if (product.id === productx.id){
                productx.selected = value;
            }
            return productx;
        }))
    }
    return (
        <div className="p-3 space-y-3 flex flex-wrap justify-center h-full rounded-2xl bg-gray-500">
            <div className="relative w-full pb-110p">
                <img className="absolute w-full h-full rounded-xl" src={product.image} alt="product" />
            </div>
            <div className="w-1/2">
                <h6 className="text-base font-extrabold"><i className="fa fa-dollar pr-1"></i> {product.price}</h6>
                <h6 className="text-base font-semibold"><i className="fa fa-list-alt pr-1"></i> {product.category}</h6>
            </div>
            <div className="w-1/2 text-right">
                <h6 className="text-base font-semibold">{product.rating.rate} <i className="fa fa-star pl-1 text-yellow-300"></i></h6>
                <h6 className="text-base font-semibold">{product.rating.count} <i className="fa fa-user pl-1 text-green-500"></i></h6>
            </div>
            <div className="w-full text-center">
                {
                    product.selected?(
                        <div className="space-x-3 flex flex-wrap justify-center items-center">
                            <button onClick={()=>setSelectedCount(product.selected-1)} className="bg-red-700 px-3 py-1 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                            <button className="bg-blue-300 px-3 py-0 rounded-lg font-bold text-2xl" >{product.selected}</button>
                            <button onClick={()=>setSelectedCount(product.selected+1)} className="bg-red-700 px-3 py-1 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>
                        </div>
                    ):(
                        <button onClick={()=>setSelectedCount(product.selected+1)} className="p-2 bg-red-500 w-full rounded-lg font-semibold"><i className="fa fa-cart-plus"></i> Add To Cart</button>
                    )
                }
            </div>
            <h4 className="bg-gray-400 px-2 rounded-lg font-bold text-lg text-center w-full">{product.title}</h4>
        </div>
    )
}

export default ProductCard;