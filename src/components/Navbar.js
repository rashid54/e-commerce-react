import {Link } from 'react-router-dom'


function Navbar(){
    const siteLogo = "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png";
    return (
        <div className="px-28 py-2 flex items-center justify-between bg-night-dark-100">
            <div className="flex flex-wrap items-center">
                <img className="w-16 h-16 p-1 mx-8 rounded-2xl" src={siteLogo} alt="Site Logo"/>
                <div>
                    <Link className="text-lg font-semibold mx-5 my-1 bg-night-light-600 px-2 rounded-md" to="/">Products</Link>
                    <Link className="text-lg font-semibold mx-5 my-1 bg-night-light-600 px-2 rounded-md" to="/">About</Link>
                    <Link className="text-lg font-semibold mx-5 my-1 bg-night-light-600 px-2 rounded-md" to="/">Contacts</Link>
                </div>
            </div>
            <button className="text-3xl mx-2 my-1 bg-night-light-300 px-2 rounded-lg justify-self-end" >
                <i className="fa fa-shopping-cart"></i>
            </button>
        </div>
    )
}

export default Navbar;