import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import CartSidebar from "./CartSidebar";
import CheckoutPage from "./CheckoutPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";
import Products from "./Products";



function Home() {
    return (
        <ShoppingContext>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <Navbar />
                        <Products />
                        <Footer />
                        <CartSidebar />
                    </Route>
                    <Route exact path="/checkout/" >
                        <Navbar />
                        <CheckoutPage />
                        <Footer />
                        <CartSidebar />
                    </Route>
                    <Route path="/success/" >
                        <Navbar />
                        <NotFoundPage />
                        <Footer />
                        <CartSidebar />
                    </Route>
                    <Route path="*" >
                        <Navbar />
                        <NotFoundPage />
                        <Footer />
                        <CartSidebar />
                    </Route>
                </Switch>
            </Router>
        </ShoppingContext>
    )
}

export default Home;
