/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const SideBar = () => {

    return (
        <div className="w-[300px] bg-DARKBLUE05 bg-repeat-y bg-cover h-screen">
            <div className="py-20 text-center text-DARKBLUE05">LOGO</div>
            <div className="">
                <CustomLink to="/dashboard" >
                    <div className="text-white font-bold text-base pl-10 py-3" >Dashboard</div>
                </CustomLink>
                <CustomLink to="/kelolakelas">
                    <div className="text-white font-bold text-base pl-10 py-3" >Kelola Kelas</div>
                </CustomLink>
                <div className="text-white font-bold text-base pl-10 py-3">Keluar</div>
            </div>
        </div>
    )
}

function CustomLink({ to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <div className={isActive ? "bg-DARKBLUE03" : "bg-DARKBLUE05"}>
            <Link to={to}>
                {children}
            </Link>
        </div>
    )
}
export default SideBar;

