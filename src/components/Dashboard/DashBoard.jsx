import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { getCategories, orders } from "../../api/coursesAPI";
import { motion } from "framer-motion";
import moment from "moment";
import FilterTable from "../HeadingTable/FilterTable";

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState(false)
    const [contentSearch, setContentSearch] = useState("")

    useEffect(() => {
        orders()
            .then(res => {
                setOrdersContainer(res.data?.data)
            })
    }, [])

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
        })
    }, [])

    const handleCategory = (id) => {
        const category = categories.find((category) => category.id === id)
        return category?.title
    }

    return (
        <section>
            <section className="flex justify-between content-center px-16 py-10 ">
                <h1 className="text-xl font-bold ">Kelola Pembayaran</h1>
                <div className="flex gap-4 items-center">
                    <FilterTable></FilterTable>
                    <div className="flex relative items-center">
                        <motion.input
                            style={{
                                display: search ? "block" : "none"
                            }}
                            className="rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" type="text" placeholder="Search" onChange={(e)=>setContentSearch(e.target.value)}></motion.input>
                        <motion.img
                            style={{
                                position: search ? "absolute" : "static"
                            }}
                            className=" right-0 pr-2" src="/icon_svg/Search.svg" onClick={() => setSearch(!search)} />
                    </div>
                </div>
            </section>
            <Tabel></Tabel>
            {
                ordersContainer.filter((item) => {
                    return contentSearch.toLocaleLowerCase === '' ? item : item.user.name.toLowerCase().includes(contentSearch.toLowerCase())
                }).map((data) => {
                    const newDate = moment(data.createdAt).format('lll');
                    handleCategory(data.course.categoryId)
                    return (
                        <DataStatusPembayaran
                            key={data.id}
                            ID={data.user.name}
                            Kategori={handleCategory(data.course.categoryId)}
                            KelasPremium={data.course.type}
                            Status={data.status}
                            MetodePembayaran={"Credit Card"}
                            TanggalBayar={newDate}
                            CourseId={data.id}>
                        </DataStatusPembayaran>
                    )
                })
            }

        </section>
    )
}

export default DashBoard;