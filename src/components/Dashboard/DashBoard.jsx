import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { getCategories, orders } from "../../api/coursesAPI";
import { motion } from "framer-motion";
import moment from "moment";
import Checkbox from "../CheckBox/Checkbox";

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState(false)
    const [contentSearch, setContentSearch] = useState("")
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * 5;
    const firstIndex = lastIndex - 5;
    const records = ordersContainer.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(ordersContainer.length / 5)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    useEffect(() => {
        orders(currentPage, 5)
            .then(res => {
                setOrdersContainer(res.data?.data)
            })
    }, [currentPage])

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
        })
    }, [])

    const handleCategory = (id) => {
        const category = categories.find((category) => category.id === id)
        return category?.title
    }

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <section>
            <section className="flex justify-between content-center px-16 py-10 ">
                <h1 className="text-xl font-bold ">Kelola Pembayaran</h1>
                <div className="flex gap-4 items-center">
                <div className="flex items-center rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" onClick={() => setOpen(!open)}>
                <img src="/icon_svg/Filter.svg" />
                <button className="font-bold text-DARKBLUE05 text-base px-2">Filter</button>
            </div>
            {open && (
                <div className="fixed inset-0  flex  items-center bg-black/50">
                    <div className="bg-white rounded-2xl max-w-screen-md mx-auto relative p-5">
                        <button type="button" onClick={() => setOpen(!open)}>
                            <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                        </button>
                        <h1 className="pb-3 text-lg font-bold">Filter By</h1>
                        <div className="flex gap-5">
                            <div className="relative">
                                <p className="py-2 px-3 border-b-2">
                                    Category
                                </p>
                                {categories.map((data) => {
                                    return (
                                        <div key={data.id} className=" bg-white">
                                            <Checkbox title={data.title} id={data.id} value={data.id} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="relative">
                                <p className="py-2 px-3 border-b-2" >
                                    Type
                                </p>

                                <div className="bg-white">
                                    <Checkbox title="Free" id="free" value="FREE" />
                                    <Checkbox title="Premium" id="PREMIUM" value="PREMIUM" />
                                </div>
                            </div>

                            <div className="relative">
                                <p className="py-2 px-3 border-b-2">
                                    Status
                                </p>
                                <div className="bg-white">
                                    <Checkbox title="Approved" id="APPROVED" value="APPROVED" />
                                    <Checkbox title="Waiting" id="WAITING" value="WAITING" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
                records?.filter((item) => {
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
            <div className="flex  gap-2 justify-center pt-10">
                <div>
                    <button className="px-3 py-2 border-2 border-DARKBLUE05 rounded-xl" onClick={prePage}>Prev</button>
                </div>
                <div className="flex gap-2 items-center">
                    {numbers.map((number, i) => (
                        <div key={i} >
                            <button
                                className={`${currentPage === number ? 'bg-DARKBLUE05 text-white' : ''} px-3 py-2 border-2 border-DARKBLUE05 rounded-xl`}
                                onClick={() => changeCurrentPage(number)}>{number}</button>
                        </div>
                    ))}

                </div>
                <div>
                    <button className="px-3 py-2 border-2 border-DARKBLUE05 rounded-xl" onClick={nextPage}>Next</button>
                </div>
            </div>

        </section>
    )
}

export default DashBoard;