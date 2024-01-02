/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { getCourses } from "../../api/coursesAPI"
import { useState } from "react"
import AddModules from "./addModules"
import EditModulesById from "./EditModulesById"
import { deleteModule } from "../../api/moduleAPI"
import { putModule } from "../../api/moduleAPI"
import ButtonTambahKelas from "../Button/ButtonTambahKelas"

const EditModules = ({ editModules, setEditModules, id }) => {
    const [modules, setModules] = useState([])
    const [addModules, setAddModules] = useState(false)
    const [editModulesById, setEditModulesById] = useState(false)
    const [title, setTitle] = useState("")
    const [video, setVideo] = useState("")
    const [time, setTime] = useState("")
    const [isHitChapter, setIsHitChapter] = useState(false)

    useEffect(() => {
        getCourses().then(res => {
            const filter = res.data.data.filter(data => {
                return data.id == id
            })
            const module = filter[0].module
            setModules(module)
        })
    }, [])

    const [chapter, setChapter] = useState("")

    const handleEditModules = async (moduleId) => {
        try {
            const payload = {
                id: moduleId,
                title,
                video,
                time: Number(time),
                courseId: id,
                chapter: Number(chapter),
              };
            await putModule(cekValue(payload, modules))
        } catch (error) {
            return error
        }
    }
    const cekValue = (data, modules) => {
        const keys = ['id','title', 'video', 'time', 'courseId' ,'chapter'];
      
        const updatedData = keys.reduce((result, key) => {
          result[key] = (data[key] !== "" && data[key] !== undefined)? data[key] : modules[key];
          return result;
        }, {});
      
        return updatedData;
      };
      


    const handleDeleteModulesById = (id) => {
        deleteModule(id).then(res => {
            console.log(res);
        })
    }

    const handleChapter = (e, title) => {
        setChapter(title)
        e.preventDefault()
    }


    return (
        <>
            {editModules && (<div className="fixed inset-0 flex items-center z-40">
                <div className="bg-white w-screen h-screen mx-auto overflow-y-auto">
                    <div className="px-44 relative">
                        <button type="button" onClick={() => setEditModules(!editModules)}>
                            <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                        </button>
                    </div>
                    <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">Edit Modules - {modules?.title}</h1>

                    <div className="px-10 grid grid-cols-2 gap-10">
                        {modules.length === 0 ? <p>Belum ada module</p>
                            :
                            modules.map((module, i) => {
                                i = i + 1
                                console.log(module);
                                return (
                                    <div key={module.id} className="gap-4 flex p-5 rounded-2xl flex-col mb-4 bg-white drop-shadow-xl">
                                        <p>Data : {i}</p>
                                        <label className="pt-2">Title</label>
                                        <input
                                            type="text"
                                            className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3"
                                            placeholder={module.title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        ></input>
                                        <label className="pt-2">Chapter</label>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center"
                                                onClick={() => setIsHitChapter(!isHitChapter)}
                                            >
                                                <p>{chapter}</p>
                                                <img
                                                    src={
                                                        isHitChapter
                                                            ? "/icon_svg/arrow-up.svg"
                                                            : "/icon_svg/arrow-down.svg"
                                                    }
                                                />
                                            </button>
                                            {isHitChapter && (
                                                <div className="bg-white absolute border-2 border-neutral-200 text-sm rounded-2xl overflow-hidden mt-2 w-full">
                                                    <button
                                                        className="text-sm px-4 py-3 w-full"
                                                        onClick={(e) => handleChapter(e, "1")}
                                                    >
                                                        1
                                                    </button>
                                                    <button
                                                        className="text-sm px-4 py-3 w-full"
                                                        onClick={(e) => handleChapter(e, "2")}
                                                    >
                                                        2
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <label className="pt-2">Time</label>
                                        <input
                                            type="number"
                                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-neutral-200 text-sm rounded-xl px-4 py-3"
                                            placeholder={module.time}
                                            onChange={(e) => setTime(e.target.value)}
                                        ></input>
                                        <label className="pt-2">Video</label>
                                        <input
                                            type="text"
                                            className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3 mb-2"
                                            placeholder={module.video}
                                            onChange={(e) => setVideo(e.target.value)}
                                        ></input>
                                        <div className="flex gap-5">
                                            <button type="button" onClick={() => handleEditModules(module.id)}>
                                                <ButtonTambahKelas title={"Simpan Edit Module"} background={"#73CA5C"} />
                                            </button>
                                            <button type="button" onClick={() => handleDeleteModulesById(module.id)}>
                                                <ButtonTambahKelas title={"Hapus Module"} background={"#FF0000"} />
                                            </button>
                                        </div>
                                        {editModulesById && (<EditModulesById id={module.id} modules={editModulesById} setModules={setEditModulesById} />)}
                                    </div>
                                )
                            })}
                    </div>
                    <div className="bg-SUCCESS py-5 mx-10 my-20 px-10 rounded-2xl shadow-xl cursor-pointer" onClick={() => setAddModules(!addModules)}>
                        <p className="text-center font-bold text-white text-xl pointer-events-none">Tambah data</p>
                    </div>
                    {addModules && (<AddModules addModules={addModules} setAddModules={setAddModules} id={id} />)}
                </div>
            </div>)}
        </>
    )
}

export default EditModules