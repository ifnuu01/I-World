import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layouts from "../layouts/Layouts";
import NotFound from "../pages/NotFound";


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
        ]
    }
])