import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
        return <Outlet/>
    } else {
        return <Navigate to="/dashboard" />
    }
}

export default ProtectedRoutes;