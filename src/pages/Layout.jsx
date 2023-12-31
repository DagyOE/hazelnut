import Navigation from "../components/Navigation.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}

export default Layout;