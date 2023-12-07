import { useState } from "react"
import ButtonTambahKelas from "../Button/ButtonTambahKelas"
import { addCourses } from "../../api/coursesAPI"
/* eslint-disable react/prop-types */
const HeadingTable = ({ Title, TambahButton }) => {
    const [addClass, setAddClass] = useState(false)
    const [nameCourses, setNameCourses] = useState("")
    const [category, setCategory] = useState("")
    const [description, setdescription] = useState("")
    const [classCode, setClassCode] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [level, setLevel] = useState("")

    const handleAddCourse = async () => {
        try {
            const payload = {
                nameCourses,
                category,
                description,
                classCode,
                type,
                price,
                level
            }
            console.log(payload)
            const response = await addCourses(payload)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    const handleAddClass = () => {
        setAddClass(!addClass)
    }
    return (
        <section className="flex justify-between content-center px-16 py-10 ">
            <h1 className="text-xl font-bold ">{Title}</h1>
            <div className="flex gap-4">
                {addClass && <div className="fixed inset-0 py-5 bg-black/50">
                    <div className="bg-white rounded-2xl max-w-screen-md mx-auto">
                        <form className="px-44 relative" onSubmit={handleAddCourse}>
                            <button type="button" onClick={handleAddClass}>
                                <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                            </button>
                            <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">TambahKelas</h1>

                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Nama Kelas</label>
                                <input type="text" name="NamaKelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={nameCourses} onChange={(e) => setNameCourses(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kategori</label>
                                <input type="text" name="Kategori" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={category} onChange={(e) => setCategory(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                <input type="text" name="Kode Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Tipe Kelas</label>
                                <input type="text" name="Tipe Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={type} onChange={(e) => setType(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Level</label>
                                <input type="text" name="Level" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={level} onChange={(e) => setLevel(e.target.value)} />
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
                                <button type="button" className="col-span-7" onClick={handleAddCourse}>
                                    <div className=""><ButtonTambahKelas background={"#FF0000"} title={"Upload Kelas"}></ButtonTambahKelas></div>
                                </button>
                                <button type="button" className="col-span-5" onClick={handleAddCourse}>
                                    <div className="col-span-5"><ButtonTambahKelas background={"#6148FF"} title={"Simpan"}></ButtonTambahKelas></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
                <div className={TambahButton}>
                    <div className="flex items-center bg-DARKBLUE05 rounded-2xl px-[10px] py-[5px]" onClick={handleAddClass}>
                        <img src="/icon_svg/gala_add.svg" />
                        <button type="button" className="font-bold text-white text-base px-2" >Tambah</button>
                    </div>
                </div>
                <div className="flex items-center rounded-2xl px-[5px]  border-DARKBLUE05 border">
                    <img src="/icon_svg/Filter.svg" />
                    <button className="font-bold text-DARKBLUE05 text-base px-2">Filter</button>
                </div>
                <img src="/icon_svg/Search.svg" />
            </div>
        </section>
    )
}

export default HeadingTable