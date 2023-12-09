import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Cards/Card";
import {
    totalClass,
    totalUser
} from "../api/coursesAPI"
import { useEffect, useState } from "react";


const DashboardPages = () => {
    // const [courses, setCourses] = useState([])
    const [users, setUsers] = useState(0)
    const [premiumCourses, setPremiumCourses] = useState(0)
    const [totalCourses, setTotalCourses] = useState(0)

    useEffect(() => {
        totalUser()
            .then((response) => {
                if (!response.status === "OK") {
                    throw new Error('Data tidak valid');
                }
                const count = response.data.data.totalUsers
                setUsers(count)
            }).catch((error) => console.error('Terjadi kesalahan:', error));
    }, [])


    useEffect(() => {
        totalClass()
            .then((response) => {
                if (!response.status === "OK") {
                    // Jika data kosong atau tidak sesuai dengan format yang diharapkan
                    throw new Error('Data tidak valid');
                }
                const hitung = response.data.data
                setTotalCourses(hitung.length)
                const filterer = hitung.filter((res) => res.type === "PREMIUM")
                setPremiumCourses(filterer.length)
            }).catch((error) => console.error('Terjadi kesalahan:', error));
    }, []);


    return (
        <div>
            <div className="flex">
                <div className="">
                    <SideBar></SideBar>
                </div>
                <div className="w-screen">
                    <Navbar></Navbar>
                    <div className="flex flex-row gap-6 justify-between px-16 py-20">
                        <Card number={users} title={"Active Users"} background={"#489CFF"}></Card>
                        <Card number={totalCourses} title={"Active Class"} background={"#73CA5C"}></Card>
                        <Card number={premiumCourses} title={"Premium Class"} background={"#6148FF"}></Card>
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