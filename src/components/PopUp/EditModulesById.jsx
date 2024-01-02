/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getModuleById, putModule } from "../../api/moduleAPI";
import ButtonTambahKelas from "../Button/ButtonTambahKelas";
import { useState } from "react";

const EditModulesById = ({ id, modules, setModules }) => {
  const [title, setTitle] = useState("")
  const [chapter, setChapter] = useState("")
  const [video, setVideo] = useState("")
  const [time, setTime] = useState("")
  const [isHitChapter, setIsHitChapter] = useState(false)
  const [modulesById, setModulesById] = useState([])

  useEffect(() => {
    getModuleById(id).then(res => {
      setModulesById(res.data.data)
      setChapter(res.data.data.chapter)
    })
  }, [id])

  const onSubmit = async () => {
    try {
      const payload = {
        title: title,
        video: video,
        time: Number(time),
        courseId: id,
        chapter: Number(chapter)
      }
      const response = await putModule(payload)
      console.log(response);
    } catch (error) {
      return error
    }
  }

  const handleChapter = (e, title) => {
    setChapter(title)
    e.preventDefault()
  }


  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/50">
        <div className="bg-white h-full mx-auto overflow-hidden flex justify-center items-center">
          <div className="relative w-full max-w-md mx-auto">
            <button type="button" onClick={() => setModules(!modules)}>
              <img
                src="/icon_svg/LiveArea.svg"
                alt="Close icon"
                className="absolute top-0 right-0 pt-4 pr-4"
              />
            </button>
            <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">
              Edit Module
            </h1>
            <div className="gap-4 flex p-5 rounded-2xl flex-col mb-4 ">
              <p>Data : {modulesById.title}</p>
              <label className="pt-2">Title</label>
              <input
                type="text"
                className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3"
                placeholder={modulesById.title}
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
                placeholder={modulesById.time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
              <label className="pt-2">Video</label>
              <input
                type="text"
                className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3 mb-2"
                placeholder={modulesById.video}
                onChange={(e) => setVideo(e.target.value)}
              ></input>
              <ButtonTambahKelas
                title={"Simpan Edit"}
                background={"#6148FF"}
                onClick={()=>onSubmit()}
              ></ButtonTambahKelas>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModulesById