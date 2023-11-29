import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import DashboardPages from "../pages/DashboardPages";
import DashBoard from "../components/DashBoard/DashBoard";
import KelolaKelas from "../components/KelolaKelas/KelolaKelas";
import PrivateRoutes from "./PrivateRoutes";
import LoginPages from "../pages/LoginPages";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<DashboardPages />}>
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/kelolakelas' element={<KelolaKelas />} />
                </Route>
            </Route>
            <Route path='/login' element={<LoginPages />} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
    )
)

export default router;