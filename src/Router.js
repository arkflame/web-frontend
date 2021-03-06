// Providers and components
import { Fragment } from "react";
import Route from './components/utils/SmartRoute';

// Pages
import Basket from "./pages/Basket.jsx";
import Category from "./pages/Category.jsx";
import Community from "./pages/Community.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import NewsPost from './pages/NewsPost.jsx'
import Register from "./pages/Register";
import Rules from "./pages/Rules";
import Discord from "./pages/Discord";
import Tienda from "./pages/Tienda";

export default function Router (props) {
    return (
        <Fragment>
            <Route
                {...props}
                path="/"
                exact
                Component={Home}
            />

            <Route
                {...props}
                path="/community"
                exact
                Component={Community}
            />

            <Route
                {...props}
                path="/store/basket"
                Component={Basket}
            />

            <Route
                {...props}
                path="/store/category"
                Component={Category}
            />

            <Route
                {...props}
                path="/news"
                Component={NewsPost}
            />
            
            <Route
                {...props}
                exact
                path="/rules"
                Component={Rules}
            />

            <Route
                {...props}
                exact
                path="/reglas"
                Component={Rules}
            />

            <Route
                {...props}
                exact
                path="/login"
                Component={Login}
            />

            <Route
                {...props}
                exact
                path="/register"
                Component={Register}
            />

            <Route
                {...props}
                exact
                path="/discord"
                Component={Discord}
            />

            <Route
                {...props}
                exact
                path="/tienda"
                Component={Tienda}
            />
        </Fragment>
    )
}