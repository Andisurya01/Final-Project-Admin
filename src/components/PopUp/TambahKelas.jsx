/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ButtonTambahKelas from "../Button/ButtonTambahKelas";
import { addCourses, getCategories, getCurretUser } from "../../api/coursesAPI"
import AddModules from "./AddModules";


const TambahKelas = ({ addClass, setAddClass }) => {
    const [nameCourses, setNameCourses] = useState("")
    const [category, setCategory] = useState("Kategori")
    const [idCategory, setIdCategory] = useState("")//categoryId
    const [classCode, setClassCode] = useState("")
    const [type, setType] = useState("type")//type
    const [level, setLevel] = useState("level")//level
    const [price, setPrice] = useState(0)
    const [description, setdescription] = useState("")
    const [categories, setCategories] = useState({})
    const [isHitCategory, setIsHitCategory] = useState(false)
    const [isHitType, setIsHitType] = useState(false)
    const [isHitLevel, setIsHitLevel] = useState(false)
    const [user, setUser] = useState("")
    const [telegram, setTelegram] = useState("")
    const [image, setImage] = useState("")
    const [addModules, setAddModules] = useState(false)

    const handleAddCourse = async () => {
        try {
            const payload = {
                title: nameCourses,
                image: image,
                subtitle: "-",
                description,
                classCode,
                type,
                authorBy: user,
                rating: 0,
                price: Number(price),
                level,
                telegram: telegram,
                categoryId: idCategory
            }
            await addCourses(payload)
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
        <>
            {addClass && <div className="fixed inset-0 z-10 flex justify-center items-center bg-black/50">
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
                        <div className="grid grid-cols-2 gap-5">
                            <div className="pb-4 relative z-30">
                                <label className="block pb-2 text-xs font-semibold">Kategori</label>
                                <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitCategory(!isHitCategory)}>
                                    <p>{category}</p>
                                    <img src={isHitCategory ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                                </button>
                                {isHitCategory && (
                                    <div className="bg-white absolute border-2 border-neutral-200 text-sm rounded-2xl overflow-hidden mt-2 w-full">
                                        {categories.map((data) => {
                                            return (
                                                <button key={data.id} onClick={(e) => handleCategory(e, data.title, data.id)}
                                                    className="text-sm px-4 py-3 w-fulla bg-white block">
                                                    {data.title}
                                                </button>
                                            )
                                        })}
                                    </div>

                                )}
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                <input type="text" name="Kode Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
                            </div>
                        </div>
                        <div className="pb-4 relative z-20">
                            <label className="block pb-2 text-xs font-semibold">Tipe Kelas</label>
                            <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitType(!isHitType)}>
                                <p>{type}</p>
                                <img src={isHitType ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                            </button>
                            {isHitType &&
                                <div className="bg-white absolute border-2 border-neutral-200 text-sm rounded-2xl overflow-hidden mt-2 w-full">
                                    <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleType(e, "FREE")}>Free</button>
                                    <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleType(e, "PREMIUM")}>Premium</button>
                                </div>}
                        </div>
                        <div className="pb-4 relative z-10">
                            <label className="block pb-2 text-xs font-semibold">Level</label>
                            <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitLevel(!isHitLevel)}>
                                <p>{level}</p>
                                <img src={isHitLevel ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                            </button>
                            {isHitLevel &&
                                <div className={`bg-white absolute border-2 border-neutral-200 text-sm rounded-2xl overflow-hidden mt-2 w-full`}>
                                    <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "BEGINNER")}>Beginner</button>
                                    <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "INTERMEDIATE")}>Intermediate</button>
                                    <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleLevel(e, "ADVANCED")}>Advanced</button>
                                </div>}
                        </div>
                        <div className="pb-4">
                            <label className="block pb-2 text-xs font-semibold">Harga</label>
                            <input type="number" min={0} name="Harga" placeholder="Text" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="grid gap-5 grid-cols-2">
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Link Telegram</label>
                                <input type="text" name="Link Tele" placeholder="www.telegram.com" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Link image</label>
                                <input type="text" name="Link Image" placeholder="www.image.com" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                        </div>
                        <div className="pb-4">
                            <label className="block pb-2 text-xs font-semibold">Materi</label>
                            <input type="text" name="Materi" placeholder="Paragraph" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 pt-3 pb-20 w-full" value={description} onChange={(e) => setdescription(e.target.value)} />
                        </div>
                        <div className="pb-11">
                            <button type="button" className="w-full" onClick={() => handleAddCourse()}>
                                <div className=""><ButtonTambahKelas background={"#6148FF"} title={"Tambah Kelas"}></ButtonTambahKelas></div>
                            </button>
                        </div>
                        {addModules && <AddModules addModules={addModules} setAddModules={setAddModules} />}
                    </form>
                </div>
            </div>}
        </>
    )
}

export default TambahKelas;