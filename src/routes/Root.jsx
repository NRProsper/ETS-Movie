import Nav from "../components/Nav.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export function Root() {
    return(
        <>
            <div id="navigation-container">
                <Nav />
            </div>
            <main id="outlet-container" className="min-h-screen mt-[80px]">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}