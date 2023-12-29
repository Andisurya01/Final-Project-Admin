import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { getCategories, orders } from "../../api/coursesAPI";
import { motion } from "framer-motion";
import moment from "moment";
import Checkbox from "../CheckBox/Checkbox";
import { Icon } from '@iconify/react';

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([]);
    const [categories, setCategories] = useState([]);
    const [contentSearch, setContentSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [search, setSearch] = useState(false);
    const [open, setOpen] = useState(false);
    const [approvedChecked, setApprovedChecked] = useState(false);
    const [waitingChecked, setWaitingChecked] = useState(false);

    useEffect(() => {
        orders(currentPage, 5)
            .then(res => {
                setOrdersContainer(res.data?.data)
                setOrder(res.data?.data)
            })
    }, [currentPage])


    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
        })
    }, [])

    useEffect(() => {
        const filterSet = new Set(order.filter(data => {
            return (approvedChecked && data.status === 'APPROVED') ||
                (waitingChecked && data.status === 'WAITING');
        }));

        setDataFilter(Array.from(filterSet));
    }, [approvedChecked, waitingChecked, order]);

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
        if (currentPage !== Math.ceil(ordersContainer.length / 5)) {
            setCurrentPage(currentPage + 1)
        }
    }


    const filterStatus = () => {
        let approvedSet = new Set();
        let waitingSet = new Set();

        if (document.getElementById('APPROVED').checked === true) {
            order.forEach((data) => {
                if (data.status === 'APPROVED') {
                    approvedSet.add(data);
                }
            });
        }

        if (document.getElementById('WAITING').checked === true) {
            order.forEach((data) => {
                if (data.status === 'WAITING') {
                    waitingSet.add(data);
                }
            });
        }

        let filterSet = new Set([...approvedSet, ...waitingSet]);

        if (document.getElementById('APPROVED').checked === false) {
            filterSet = new Set([...filterSet].filter((data) => data.status !== 'APPROVED'));
        }

        if (document.getElementById('WAITING').checked === false) {
            filterSet = new Set([...filterSet].filter((data) => data.status !== 'WAITING'));
        }

        let filterList = Array.from(filterSet);

        setApprovedChecked(document.getElementById('APPROVED').checked);
        setWaitingChecked(document.getElementById('WAITING').checked);


        setDataFilter(filterList);
    };

    const renderOrders = () => {
        const filteredData = ordersContainer
            .filter((item) =>
                item.user.name.toLowerCase().includes(contentSearch.toLowerCase())
            )
            .filter((item) => dataFilter.length === 0 || dataFilter.includes(item));

        const lastIndex = currentPage * 5;
        const firstIndex = lastIndex - 5;
        const paginatedData = filteredData.slice(firstIndex, lastIndex);

        console.log(paginatedData);

        return paginatedData.map((data) => (
            <DataStatusPembayaran
                key={data.id}
                ID={data.user.name}
                UserId={data.user.id}
                Kategori={handleCategory(data.course.categoryId)}
                KelasPremium={data.course.type}
                Status={data.status}
                MetodePembayaran={"Credit Card"}
                TanggalBayar={moment(data.createdAt).format("lll")}
                CourseId={data.id}
                IsCourseId={data.course.id}
            />
        ));
    };

    const hapusFilter = () => {
        setOrdersContainer(order)
        if (document.getElementById('APPROVED').checked === true) {
            document.getElementById('APPROVED').addEventListener('click', function () {
            })
            document.getElementById('APPROVED').click();
        }

        if (document.getElementById('WAITING').checked === true) {
            document.getElementById('WAITING').addEventListener('click', function () {
            })
            document.getElementById('WAITING').click();
        }
    };



    return (
        <section>
            <section className="flex justify-between content-center px-16 py-10 ">
                <h1 className="text-xl font-bold ">Kelola Pembayaran</h1>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center rounded-2xl px-[10px] py-[5px] cursor-pointer border-DARKBLUE05 border" onClick={() => setOpen(!open)}>
                        <img src="/icon_svg/Filter.svg" />
                        <button className="font-bold text-DARKBLUE05 text-base ml-2">Filter</button>
                    </div>
                    {open && (
                        <div className="fixed inset-0 flex  items-center bg-black/50">
                            <div className="bg-white relative rounded-2xl max-w-screen-md mx-auto p-5">
                                <button type="button" onClick={() => setOpen(!open)}>
                                    <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                                </button>
                                <h1 className="pb-3 text-lg font-bold">Filter By</h1>
                                <div className="flex gap-5">
                                    <div className="relative ">
                                        <p className="py-2 px-3 border-b-2">
                                            Status
                                        </p>
                                        <div className="bg-white flex flex-col">
                                            <button onClick={() => filterStatus()}>
                                                <Checkbox title="Approved" id="APPROVED" value="APPROVED" checked={approvedChecked}
                                                    onChange={() => setApprovedChecked(!approvedChecked)}
                                                />
                                            </button>
                                            <button onClick={() => filterStatus()}>
                                                <Checkbox title="Waiting" id="WAITING" value="WAITING" checked={waitingChecked}
                                                    onChange={() => setWaitingChecked(!waitingChecked)}
                                                />
                                            </button>
                                        </div>

                                    </div>
                                    <div className=" bottom-0 right-0 pt-3 flex justify-center gap-2">
                                        <button id="filterButton" className="bg-SUCCESS text-white text-sm font-medium py-2 px-3 rounded-lg" onClick={() => setOrdersContainer(dataFilter)}>Terapkan</button>
                                        <button id="deleteFilter" className="bg-WARNING text-white text-sm font-medium py-2 px-3 rounded-lg" onClick={() => hapusFilter()}>Hapus Filter</button>
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
                            className="rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" type="text" placeholder="Search" onChange={(e) => setContentSearch(e.target.value)}></motion.input>
                        <motion.img
                            style={{
                                position: search ? "absolute" : "static"
                            }}
                            className="cursor-pointer right-0 pr-2" src="/icon_svg/Search.svg" onClick={() => setSearch(!search)} />
                    </div>
                </div>
            </section>
            <Tabel></Tabel>
            {renderOrders()}
            
            <div className="flex  gap-2 justify-center pt-10">
                <div>
                    <button className="w-10 h-10 bg-LIGHTBLUE05 rounded-full hover:bg-DARKBLUE05 hover:text-white flex items-center justify-center" onClick={prePage}><Icon icon="ion:arrow-back-outline" className="text-2xl" /></button>
                </div>
                <div className="flex gap-2 items-center">
                    {[...Array(Math.ceil(ordersContainer.length / 5)).keys()].map(
                        (number, i) => (
                            <div key={i}>
                                <button
                                    className={`${currentPage === number + 1 ? "bg-DARKBLUE05 text-white" : ""
                                        } px-3 py-2 border-2 border-DARKBLUE05 rounded-xl`}
                                    onClick={() => changeCurrentPage(number + 1)}
                                >
                                    {number + 1}
                                </button>
                            </div>
                        )
                    )}

                </div>
                <div>
                    <button className="w-10 h-10 bg-LIGHTBLUE05 rounded-full hover:bg-DARKBLUE05 hover:text-white flex items-center justify-center" onClick={nextPage}><Icon icon="ion:arrow-forward-outline" className="text-2xl" /></button>
                </div>
            </div>

        </section>
    )
}

export default DashBoard;