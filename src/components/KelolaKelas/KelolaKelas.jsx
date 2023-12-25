import { useEffect, useState } from "react";
import { getCourses } from "../../api/coursesAPI";
import Tabel from "../KelolaKelas/Tabel";
import DataTabelKelas from "./DataTabelKelas";
import rupiah from "../../utils/Rupiah";
import FilterTable from "../HeadingTable/FilterTable";
import { motion } from "framer-motion";
import TambahKelas from "../PopUp/TambahKelas";


const KelolaKelas = () => {
    const [courses, setCourses] = useState([])
    const [addClass, setAddClass] = useState(false)
    const [search, setSearch] = useState(false)
    const [contentSearch, setContentSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * 5;
    const firstIndex = lastIndex - 5;
    const records = courses?.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(courses.length / 5)
    const numbers = [...Array(nPage + 1).keys()]?.slice(1)


    useEffect(() => {
        getCourses(currentPage, 5)
            .then(res => setCourses(res.data?.data))
    }, [currentPage])

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
                    <FilterTable></FilterTable>
                    <div className="flex relative items-center">
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
            {
                records?.filter((item) => {
                    return contentSearch.toLocaleLowerCase === ''
                        ? item
                        : item.category.title.toLowerCase().includes(contentSearch.toLowerCase())
                        || item.title.toLowerCase().includes(contentSearch.toLowerCase())
                }).map((data) => {
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
                    )
                })
            }
            <div className="flex gap-2 justify-center pt-10">
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

export default KelolaKelas;