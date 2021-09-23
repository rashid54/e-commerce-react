import { useContext } from "react";
import { ShopContex } from "../contexts/ShoppingContext";
import CartProductCard from "./CartProductCard";



function CartSidebar(){
    const {allProducts} = useContext(ShopContex);
    const selectedProducts = allProducts.filter((product)=>product.selected>0);
    console.log(selectedProducts);
    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-90 overflow-y-auto h-full w-full">
            <div className="flex flex-col h-full w-2/5 bg-white absolute right-0 top-0">
                <div className="bg-night-dark-100 h-1/12 px-2 items-center flex">
                    <h6 className="text-night-light-600 font-bold text-3xl flex-grow bg-night-dark-200 px-2 py-1 mx-2 rounded-md">Shopping Cart</h6>
                    <button className="bg-night-light-600 px-3 py-1 mx-2 rounded-full" ><i className="fa fa-plus transform rotate-45 font-medium text-xl text-night-dark-100"></i></button>
                </div>
                <div className="bg-red-500 flex-grow">
                    {
                        allProducts.filter((product)=>product.selected>0).map((product)=><CartProductCard product={product} />)
                    }
                </div>
                <hr className="w-1/2 my-1 border-dotted border-t-8 mx-auto border-gray-400"/>
                <div className="flex flex-col space-y-1 py-2">
                    <div className="flex py-1 px-4 bg-gray-300 rounded-md mx-2">
                        <h4 className="font-semibold text-lg">Total Cost: </h4>
                        <h6 className="flex-grow text-right w-1/2 text-lg font-bold">{allProducts.reduce((accu,curr)=>accu+curr.selected,0)}<i className="fa fa-dollar text-base pl-2"></i></h6>
                    </div>
                    <button className="font-semibold text-lg bg-red-500 mx-2 rounded-lg py-3">Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar;