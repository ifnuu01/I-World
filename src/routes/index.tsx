import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layouts from "../layouts/Layouts";
import NotFound from "../pages/NotFound";
import CountryDetail from "@/pages/CountryDetail";
import About from "@/pages/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/country/:code",
                element: <CountryDetail />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])