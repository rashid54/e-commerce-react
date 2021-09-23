import { useContext } from "react";
import { ShopContex } from "../contexts/ShoppingContext";


function CartProductCard({product}){
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
        <div className="mx-2 my-3 bg-yellow-200 px-3 py-1 flex flex-wrap flex-row rounded-md">
            <div className="w-full flex flex-wrap space-y-1 space-x-2">
                <div className="relative w-1/4 pb-1/4">
                    <img className="absolute w-full h-full rounded-xl" src={product.image} alt="product" />
                </div>
                <div className="w-3/5 flex flex-wrap flex-grow">
                    <h4 className="bg-gray-500 w-full text-center rounded-md font-bold">{product.title}</h4>
                    <h6 className="w-1/2 text-base font-bold"><i className="fa fa-dollar pr-1"></i> {product.price}</h6>
                    <h6 className="w-1/2 text-right text-base font-semibold">{product.rating.rate} <i className="fa fa-star pl-1 text-yellow-300"></i></h6>
                </div>
            </div>
            <div className="flex w-full py-1">
                <button onClick={()=>setSelectedCount(0)} className="bg-red-500 w-1/4 py-0 px-2 font-semibold rounded-md">Remove</button>
                <div className="flex space-x-3 justify-around flex-grow px-3">
                    <button className="flex-grow bg-blue-300 px-3 py-0 rounded-lg font-bold text-lg" >{product.selected}</button>
                    <button onClick={()=>setSelectedCount(product.selected-1)} className="bg-red-700 px-2 py-0 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                    <button onClick={()=>setSelectedCount(product.selected+1)} className="bg-red-700 px-2 py-0 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>
                    
                </div>
            </div>

        </div>
    )
}

export default CartProductCard;