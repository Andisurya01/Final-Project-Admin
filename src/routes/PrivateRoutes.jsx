import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    // const token = localStorage.getItem("token");
    const auth = {'token': false}
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    );
}

export default PrivateRoutes;