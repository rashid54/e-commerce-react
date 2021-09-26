import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import CartSidebar from "./sidebar/CartSidebar";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./footer/Footer";
import Navbar from "./Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/Products";
import PurchaseSuccess from "./pages/PurchaseSuccess";



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
                        <PurchaseSuccess />
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
