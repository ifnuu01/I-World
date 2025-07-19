import { Outlet, useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useEffect } from "react";

function Layouts() {
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.preserveScroll) {
            window.scrollTo(0, 0);
        }
    }, [location.state?.preserveScroll, location.pathname]);

    return (
        <div className="font-family-inknut text-white min-h-screen">
            <Navbar />
            <main className="pt-40 px-4 md:px-16 md:max-w-[1630px] mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layouts