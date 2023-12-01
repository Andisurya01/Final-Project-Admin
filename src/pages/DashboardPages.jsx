import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Cards/Card";
const DashboardPages = () => {
    return (
        <div>
            <div className="flex">
                <div className="">
                    <SideBar></SideBar>
                </div>
                <div className="w-screen">
                    <Navbar></Navbar>
                    <div className="flex flex-row gap-6 justify-between px-16 py-20">
                        <Card number={"450"} title={"Active Users"} background={"#489CFF"}></Card>
                        <Card number={"25"} title={"Active Class"} background={"#73CA5C"}></Card>
                        <Card number={"20"} title={"Premium Class"} background={"#6148FF"}></Card>
                    </div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>

    )
}

export default DashboardPages;