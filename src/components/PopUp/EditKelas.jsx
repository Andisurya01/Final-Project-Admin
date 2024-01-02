/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ButtonEditKelas from "../Button/ButtonTambahKelas";
import { getCategories, getCourseById, getCurretUser, putCourse } from "../../api/coursesAPI"
import EditModules from "./EditModules";
import AllertReset from "../Allert/AllertReset";


const EditKelas = ({ editCourse, setEditCourse, id }) => {
    const [nameCourses, setNameCourses] = useState("")
    const [category, setCategory] = useState("Kategori")
    const [idCategory, setIdCategory] = useState("")//categoryId
    const [classCode, setClassCode] = useState("")
    const [type, setType] = useState("type")//type
    const [level, setLevel] = useState("level")//level
    const [description, setdescription] = useState("")
    const [categories, setCategories] = useState({})
    const [isHitCategory, setIsHitCategory] = useState(false)
    const [isHitType, setIsHitType] = useState(false)
    const [isHitLevel, setIsHitLevel] = useState(false)
    const [user, setUser] = useState("")
    const [telegram, setTelegram] = useState("")
    const [image, setImage] = useState("")
    const [idCourse, setIdCourse] = useState([])
    const [editModules, setEditModules] = useState(false)
    const [showTopPopup, setShowTopPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [typepop, setTypepop] = useState("");

    const handleEditCourse = async () => {
        try {
            const payload = {
                id: id,
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
            const result = await putCourse(cekValue(payload, idCourse))
            console.log(result);
            setTypepop(result.data.status)
            setMessage(result.data.message)
            console.log(cekValue(payload, idCourse));
        } catch (error) {
            console.log(error)
        }
    }

    const cekValue = (data, idCourse) => {
        const keys = ['id', 'title', 'image', 'subtitle', 'description', 'classCode', 'type', 'authorBy', 'rating', 'price', 'level', 'telegram'];
    
        const updatedData = keys.reduce((result, key) => {
            result[key] = data[key] !== "" ? data[key] : idCourse[key];
            return result;
        }, {});
    
        return updatedData;
    };

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data?.data)
        })
    }, [])

    useEffect(() => {
        getCourseById(id).then(res => {
            setIdCourse(res.data.data)
            console.log(res.data.data);
        })
    }, [id])

    const [price, setPrice] = useState(idCourse.price)


    useEffect(() => {
        getCurretUser().then(res => {
            setUser(res.data?.data.name);
        })
    }, [])

    const handleCategory = (e, title, id) => {
        e.stopPropagation()
        setCategory(title)
        setIdCategory(id)
        e.preventDefault()
    }

    const handleType = (e, title) => {
        e.stopPropagation()
        setType(title)
        e.preventDefault()
    }

    const handleLevel = (e, title) => {
        e.stopPropagation()
        setLevel(title)
        e.preventDefault()
    }

    const handleClick = () => {
        setTimeout(() => {
            setShowTopPopup(true);
        }, 1000);
        setTimeout(() => {
            setShowTopPopup(false);
        }, 5000)
    };

    return (
        <>
            {editCourse && <div className="fixed inset-0  flex justify-center items-center bg-black/50">
                <div className="bg-white rounded-2xl max-w-screen-md mx-auto">
                    <form className="px-44 relative" >
                        <button type="button" onClick={() => setEditCourse(!editCourse)}>
                            <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                        </button>
                        {showTopPopup && (<div className="justify-center items-center absolute ">
                            <AllertReset message={message} type={typepop} onClose={handleClick} duration={5000} />
                        </div>
                        )}
                        <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">EditKelas</h1>
                        <div className="pb-4">
                            <label className="block pb-2 text-xs font-semibold">Nama Kelas</label>
                            <input type="text" name="NamaKelas" placeholder={idCourse.title} className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={nameCourses} onChange={(e) => setNameCourses(e.target.value)} />
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
                                                    className="text-sm px-4 py-3  w-fulla bg-white block">
                                                    {data.title}
                                                </button>
                                            )
                                        })}
                                    </div>

                                )}
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                <input type="text" name="Kode Kelas" placeholder={idCourse.classCode} className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
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
                            <input type="number" min={0} name="Harga" placeholder={idCourse.price} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="grid gap-5 grid-cols-2">
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Link Telegram</label>
                                <input type="text" name="Link Tele" placeholder={idCourse.telegram} className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Link image</label>
                                <input type="text" name="Link Image" placeholder={idCourse.image} className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                        </div>
                        <div className="pb-4">
                            <label className="block pb-2 text-xs font-semibold">Materi</label>
                            <input type="text" name="Materi" placeholder={idCourse.description} className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 pt-3 pb-20 w-full" value={description} onChange={(e) => setdescription(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-12 gap-[15px] pb-11">
                            <button type="button" className="col-span-7" onClick={() => setEditModules(!editModules)}>
                                <div className=""><ButtonEditKelas background={"#FF0000"} title={"Edit Module"}></ButtonEditKelas></div>
                            </button>
                            <button type="button" className="col-span-5" onClick={() => {handleEditCourse(); handleClick()}}>
                                <div className="col-span-5"><ButtonEditKelas background={"#6148FF"} title={"Simpan"}></ButtonEditKelas></div>
                            </button>
                        </div>

                        {editModules && <EditModules editModules={editModules} setEditModules={setEditModules} id={id} />}
                    </form>
                </div>
            </div>}
        </>
    )
}

export default EditKelas;