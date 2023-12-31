import { useEffect, useState } from "react";
import { getCourses } from "../../api/coursesAPI";
import Tabel from "../KelolaKelas/Tabel";
import DataTabelKelas from "./DataTabelKelas";
import rupiah from "../../utils/Rupiah";
import { motion } from "framer-motion";
import TambahKelas from "../PopUp/TambahKelas";
import { Icon } from '@iconify/react';


const KelolaKelas = () => {
    const [courses, setCourses] = useState([])
    const [addClass, setAddClass] = useState(false)
    const [search, setSearch] = useState(false)
    const [contentSearch, setContentSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [dataFilter, setDataFilter] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);

    useEffect(() => {
        getCourses(currentPage, 5)
            .then(res => setCourses(res.data?.data));
    }, [currentPage]);

    useEffect(() => {
        const filterSet = new Set(courses.filter(data => {
            return contentSearch.toLowerCase() === '' ||
                data.category.title.toLowerCase().includes(contentSearch.toLowerCase()) ||
                data.title.toLowerCase().includes(contentSearch.toLowerCase());
        }));

        setDataFilter(Array.from(filterSet));
    }, [contentSearch, courses]);
    
    useEffect(() => {
        const lastIndex = currentPage * 5;
        const firstIndex = lastIndex - 5;
        const paginatedData = dataFilter.slice(firstIndex, lastIndex);
        setDisplayedData(paginatedData);
    }, [currentPage, dataFilter]);

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    }

    const nextPage = () => {
        if (currentPage !== Math.ceil(courses.length / 5)) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <section className="">
            <section className="flex justify-between content-center px-16 py-10 ">
                <h1 className="text-xl font-bold ">Kelola Kelas</h1>
                <div className="flex gap-4 items-center">
                    {addClass && <TambahKelas addClass={addClass} setAddClass={setAddClass} />}
                    <div>
                        <div className="flex items-center bg-DARKBLUE05 rounded-2xl px-[10px] py-[5px]" onClick={() => setAddClass(!addClass)}>
                            <img src="/icon_svg/gala_add.svg" />
                            <button type="button" className="font-bold text-white text-base px-2" >Tambah</button>
                        </div>
                    </div>
                    {/* <FilterTable></FilterTable> */}
                    <div className="flex relative items-center z-0">
                        <motion.input
                            transition={{ duration: 5 }}
                            style={{
                                display: search ? "block" : "none"
                            }}
                            className="rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" type="text" placeholder="Search" onChange={(e) => setContentSearch(e.target.value)}></motion.input>
                        <motion.img
                            style={{
                                position: search ? "absolute" : "static"
                            }}
                            className=" right-0 pr-2" src="/icon_svg/Search.svg" onClick={() => setSearch(!search)} />
                    </div>
                </div>
            </section>
            <Tabel></Tabel>
            {displayedData?.map((data) => {
                return (
                    <DataTabelKelas
                        key={data.id}
                        id={data.id}
                        KodeKelas={data.classCode}
                        Kategori={data.category.title}
                        NamaKelas={data.title}
                        TipeKelas={data.type}
                        Level={data.level}
                        HargaKelas={rupiah(data.price)}>
                    </DataTabelKelas>
                );
            })}
            <div className="flex gap-2 justify-center pt-10">
                <div>
                    <button className="w-10 h-10 bg-LIGHTBLUE05 rounded-full hover:bg-DARKBLUE05 hover:text-white flex items-center justify-center" onClick={prePage}><Icon icon="ion:arrow-back-outline" className="text-2xl" /></button>
                </div>
                <div className="flex gap-2 items-center">
                    {[...Array(Math.ceil(courses.length / 5)).keys()].map(
                        (number, i) => (
                            <div key={i}>
                                <button
                                    className={`${currentPage === number + 1 ? "bg-DARKBLUE05 text-white" : "bg-LIGHTBLUE05"
                                        } w-10 h-10 rounded-full hover:bg-DARKBLUE05 hover:text-white`}
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

export default KelolaKelas;