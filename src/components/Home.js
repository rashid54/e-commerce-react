import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
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
                    </Route>
                </Switch>
            </Router>
        </ShoppingContext>
    )
}

export default Home;