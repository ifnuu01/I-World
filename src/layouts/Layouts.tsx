import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
function Layouts() {
    return (
        <div className="font-family-inknut text-white min-h-screen">
            <Navbar />
            <main className="pt-40 px-4 md:px-14">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layouts