import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import CartSidebar from "./CartSidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";



function Home(){
    return (
        <ShoppingContext>
            <Router>
                <Switch>
                    <Route path="/" >
                        <Navbar /> 
                        <Products/>
                        <Footer />
                        <CartSidebar />
                    </Route>
                </Switch>
            </Router>
        </ShoppingContext>
    )
}

export default Home;