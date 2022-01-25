import React, { Component } from 'react';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import{
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

class Routing extends Component {
    render() { 
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>about</Link></li>
                        <li><Link to={"/contact"}>about</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path={"/"}> <Home /> </Route>
                    <Route path={"/about"}> <About /></Route>
                    <Route path={"/contact"}> <Contact /> </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Routing;