import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import DashboardPages from "../pages/DashboardPages";
import DashBoard from "../components/Dashboard/DashBoard";
import KelolaKelas from "../components/KelolaKelas/KelolaKelas";
import PrivateRoutes from "./PrivateRoutes";
import LoginPages from "../pages/LoginPages";
import HookButtonProvider from "../components/Context/HookButtonProvider";
import NotFound from "../pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<HookButtonProvider><DashboardPages /></HookButtonProvider>}>
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/kelolakelas' element={<KelolaKelas />} />
                </Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/login' element={<LoginPages />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

export default router;