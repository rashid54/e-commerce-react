import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShoppingContext from "../contexts/ShoppingContext";
import Navbar from "./Navbar";



function Home(){
    return (
        <ShoppingContext>
            <React.Fragment>
                <Router>
                    <Switch>
                        <Navbar />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </React.Fragment>
        </ShoppingContext>
    )
}

export default Home;