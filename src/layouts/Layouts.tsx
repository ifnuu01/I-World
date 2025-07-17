import { Outlet } from "react-router-dom"
function Layouts() {
    return (
        <div>
            <h1>Layouts</h1>
            <Outlet />
        </div>
    )
}

export default Layouts