import { useEffect, useState } from "react";
import { getCourses } from "../../api/coursesAPI";
import Tabel from "../KelolaKelas/Tabel";
import DataTabelKelas from "./DataTabelKelas";
import rupiah from "../../utils/Rupiah";
import { addCourses, getCategories, getCurretUser } from "../../api/coursesAPI"
import ButtonTambahKelas from "../Button/ButtonTambahKelas";
import FilterTable from "../HeadingTable/FilterTable";
import { motion } from "framer-motion";


const KelolaKelas = () => {
    const [courses, setCourses] = useState([])
    const [addClass, setAddClass] = useState(false)
    const [nameCourses, setNameCourses] = useState("")
    const [category, setCategory] = useState("Kategori")
    const [idCategory, setIdCategory] = useState("")//categoryId
    const [classCode, setClassCode] = useState("")
    const [type, setType] = useState("type")//type
    const [level, setLevel] = useState("level")//level
    const [price, setPrice] = useState("")
    const [description, setdescription] = useState("")
    const [categories, setCategories] = useState({})
    const [isHitCategory, setIsHitCategory] = useState(false)
    const [isHitType, setIsHitType] = useState(false)
    const [isHitLevel, setIsHitLevel] = useState(false)
    const [search, setSearch] = useState(false)
    const [user, setUser] = useState("")
    const [contentSearch, setContentSearch] = useState("")

    
    useEffect(() => {
        getCourses()
            .then(res => setCourses(res.data.data))
    })

    const handleAddCourse = async () => {
        try {
            const payload = {
                title: nameCourses,
                image: "-",
                subtitle: "-",
                description,
                classCode,
                type,
                authorBy: user,
                rating: 0,
                price: 90000,
                level,
                telegram: "www.tele.com",
                categoryId: idCategory
            }
            await addCourses(payload)
            console.log(payload);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
        })
    }, [])

    useEffect(() => {
        getCurretUser().then(res => {
            setUser(res.data.data.name);
        })
    }, [])

    const handleCategory = (e, title, id) => {
        setCategory(title)
        setIdCategory(id)
        e.preventDefault()
    }

    const handleType = (e, title) => {
        setType(title)
        e.preventDefault()
    }

    const handleLevel = (e, title) => {
        setLevel(title)
        e.preventDefault()
    }

    return (
        <section>
            <section className="flex justify-between content-center px-16 py-10 ">
                <h1 className="text-xl font-bold ">Kelola Kelas</h1>
                <div className="flex gap-4 items-center">
                    {addClass && <div className="fixed inset-0  flex justify-center items-center bg-black/50">
                        <div className="bg-white rounded-2xl max-w-screen-md mx-auto">
                            <form className="px-44 relative" >
                                <button type="button" onClick={() => setAddClass(!addClass)}>
                                    <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                                </button>
                                <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">TambahKelas</h1>

                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Nama Kelas</label>
                                    <input type="text" name="NamaKelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={nameCourses} onChange={(e) => setNameCourses(e.target.value)} />
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                    <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitCategory(!isHitCategory)}>
                                        <p>{category}</p>
                                        <img src={isHitCategory ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                                    </button>
                                    {isHitCategory && categories.map((data) => {
                                        return (
                                            <button onClick={(e) => handleCategory(e, data.title, data.id)}
                                                className="text-sm px-4 py-3 w-full"
                                                key={data.id}>
                                                {data.title}
                                            </button>
                                        )
                                    })}
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                    <input type="text" name="Kode Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Tipe Kelas</label>
                                    <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitType(!isHitType)}>
                                        <p>{type}</p>
                                        <img src={isHitType ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                                    </button>
                                    {isHitType &&
                                        <div>
                                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleType(e, "FREE")}>Free</button>
                                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleType(e, "PREMIUM")}>Premium</button>
                                        </div>}
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Level</label>
                                    <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitLevel(!isHitLevel)}>
                                        <p>{level}</p>
                                        <img src={isHitLevel ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                                    </button>
                                    {isHitLevel &&
                                        <div>
                                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "BEGINNER")}>Beginner</button>
                                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "INTERMEDIATE")}>Intermediate</button>
                                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "ADVANCED")}>Advanced</button>
                                        </div>}
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Harga</label>
                                    <input type="text" name="Harga" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="pb-4">
                                    <label className="block pb-2 text-xs font-semibold">Materi</label>
                                    <input type="text" name="Materi" placeholder="Paragraph" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 pt-3 pb-20 w-full" value={description} onChange={(e) => setdescription(e.target.value)} />
                                </div>
                                <div className="grid grid-cols-12 gap-[15px] pb-11">
                                    <button type="button" className="col-span-7" onClick={() => handleAddCourse()}>
                                        <div className=""><ButtonTambahKelas background={"#FF0000"} title={"Upload Kelas"}></ButtonTambahKelas></div>
                                    </button>
                                    <button type="button" className="col-span-5" onClick={() => handleAddCourse()}>
                                        <div className="col-span-5"><ButtonTambahKelas background={"#6148FF"} title={"Simpan"}></ButtonTambahKelas></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>}
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
                courses.filter((item) => {
                    return contentSearch.toLocaleLowerCase === '' 
                    ? item 
                    : item.category.title.toLowerCase().includes(contentSearch.toLowerCase()) 
                    || item.title.toLowerCase().includes(contentSearch.toLowerCase())
                }).map((data) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
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
        </section>
    )
}

export default KelolaKelas;