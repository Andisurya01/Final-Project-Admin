/* eslint-disable react/prop-types */
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import ButtonTambahKelas from "../Button/ButtonTambahKelas";
import deleteCookie from "../../api/deleteCookie";
const SideBar = () => {
    const [addClass, setAddClass] = useState(false)
    const navigate = useNavigate()

    const handleAddClass = () => {
        setAddClass(!addClass)
    }

    const handleExit = () => {
        deleteCookie("token")
        navigate("/login")
    }
    return (
        <div className="w-[300px] bg-DARKBLUE05 bg-repeat-y bg-cover h-screen">
            <div className="py-20 text-center text-DARKBLUE05">LOGO</div>
            <div className="">
                <CustomLink to="/dashboard" >
                    <div className="text-white font-bold text-base pl-10 py-3">Dashboard</div>
                </CustomLink>
                <CustomLink to="/kelolakelas">
                    <div className="text-white font-bold text-base pl-10 py-3">Kelola Kelas</div>
                </CustomLink>
                <div className="text-white font-bold text-base pl-10 py-3" onClick={handleAddClass}>Keluar</div>

                {addClass ? (<section className="fixed inset-0 bg-black/50">
                    <div className="flex bg-white text-center flex-col px-5 w-60 mx-auto rounded-2xl">
                        <div className="p-5">
                            <h1 className="font-bold">
                                Apakah anda yakin ingin keluar?
                            </h1>
                            <div className="flex gap-[15px] pt-5">
                                <button onClick={handleExit}>
                                    <ButtonTambahKelas title={"Keluar"} background={"#6148FF"}></ButtonTambahKelas>
                                </button>
                                <button onClick={handleAddClass}>
                                    <ButtonTambahKelas title={"Batal"} background={"#FF0000"}></ButtonTambahKelas>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>) : null}
            </div>
        </div>
    )
}

function CustomLink({ to, children }) {
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

