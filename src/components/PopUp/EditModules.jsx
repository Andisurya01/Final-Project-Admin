/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { getCourses } from "../../api/coursesAPI"
import { useState } from "react"
import AddModules from "./addModules"
import EditModulesById from "./EditModulesById"

const EditModules = ({ editModules, setEditModules, id }) => {
    const [modules, setModules] = useState([])
    const [addModules, setAddModules] = useState(false)
    const [editModulesById, setEditModulesById] = useState(false)

    useEffect(() => {
        getCourses().then(res => {
            const filter = res.data.data.filter(data => {
                return data.id == id
            })
            const module = filter[0].module
            console.log(module);
            setModules(module)
        })
    }, [])

    const handleModulesById = (id) => {
        setEditModulesById(!editModulesById)
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
                    <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">Edit Modules</h1>

                    <div className="px-10 grid grid-cols-2 gap-10">
                        {modules.length === 0 ? <p>Belum ada module</p>
                            :
                            modules.map((module, i) => {
                                i = i + 1
                                return (
                                    <div key={module.id} className="gap-4 flex p-5 rounded-2xl flex-col mb-4 bg-white drop-shadow-xl">
                                        <p>Data : {i}</p>
                                        <p className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3">title : {module.title}</p>
                                        <p className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3">chapter : {module.chapter}</p>
                                        <p className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3">video : {module.video}</p>
                                        <p className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3">time : {module.time}</p>
                                        <button type="button" onClick={() => handleModulesById(id)}>editModulesById</button>
                                        {editModulesById && (<EditModulesById id={module.id} modules={editModulesById} setModules={setEditModulesById} />)}
                                    </div>
                                )
                            })}
                    </div>
                    <div className="bg-SUCCESS py-5 mx-10 my-20 px-10 rounded-2xl shadow-xl cursor-pointer" onClick={()=>setAddModules(!addModules)}>
                        <p className="text-center font-bold text-white text-xl pointer-events-none">Tambah data</p>
                    </div>
                    {addModules && (<AddModules addModules={addModules} setAddModules={setAddModules} id={id} /> )}
                </div>
            </div>)}
        </>
    )
}

export default EditModules