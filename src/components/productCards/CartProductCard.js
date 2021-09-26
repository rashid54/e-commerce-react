import { useContext } from "react";
import { ShopContex } from "../../contexts/ShoppingContext";


function CartProductCard({ product: { id, title, image, price, rating: { rate }}, count }) {
    const {cartProducts, setCartProducts} = useContext(ShopContex);

    return (
        <div className="bg-neon1-light-2000 hover:bg-neon1-light-900 transform transition hover:scale-102 mx-2 my-3 px-3 py-1 flex flex-wrap flex-row rounded-md">
            <div className="w-full flex flex-wrap space-y-1 space-x-2">
                <div className="relative w-1/4 pb-1/4">
                    <img className="absolute w-full h-full rounded-xl" src={image} alt="product" />
                </div>
                <div className="w-3/5 flex flex-wrap flex-grow space-y-1">
                    <h4 className="bg-neon1-light-1000 w-full text-center rounded-md font-bold">{title}</h4>
                    <h6 className="w-1/2 text-base font-bold"><i className="fa fa-dollar pr-1"></i> {price}</h6>
                    <h6 className="w-1/2 text-right text-base font-semibold">{rate} <i className="fa fa-star pl-1 text-yellow-300"></i></h6>
                </div>
            </div>
            <div className="flex w-full py-1">
                <button className="bg-red-400 transition transform hover:scale-105 w-1/4 py-0 px-2 font-semibold rounded-md" onClick={() =>{
                    const {[id]:removedProduct, ...newCart} = cartProducts;
                    setCartProducts(newCart);
                }} >Remove</button>
                <div className="flex space-x-3 justify-around flex-grow px-8 space-x-4">
                    <h3 className="flex-grow bg-blue-300 px-3 py-0 text-center rounded-lg font-bold text-lg" >{count}</h3>
                    <button onClick={() => setCartProducts({...cartProducts, [id]: {...cartProducts[id],count: count-1}})} className="bg-red-400 transition transform hover:scale-110 px-2 py-0 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                    <button onClick={() => setCartProducts({...cartProducts, [id]: {...cartProducts[id],count: count+1}})} className="bg-green-500 transition transform hover:scale-110 px-2 py-0 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>

                </div>
            </div>

        </div>
    )
}

export default CartProductCard;