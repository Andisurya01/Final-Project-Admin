import { postModule } from "../../api/moduleAPI"
import ButtonTambahKelas from "../Button/ButtonTambahKelas"
import { useState } from "react"
import AllertReset from "../Allert/AllertReset"

/* eslint-disable react/prop-types */
const AddModules = ({ addModules, id }) => {
    const [title, setTitle] = useState("")
    const [chapter, setChapter] = useState("")
    const [video, setVideo] = useState("")
    const [time, setTime] = useState("")
    const [isHitChapter, setIsHitChapter] = useState(false)
    const [showTopPopup, setShowTopPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const onSubmit = async () => {
        try {
            const payload = {
                title: title,
                video: video,
                time: Number(time),
                courseId: id,
                chapter: Number(chapter)
            }
            console.log(payload);
            const response = await postModule(payload)
            console.log(response);
            setType(response.data.status)
            setMessage(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChapter = (e, title) => {
        setChapter(title)
        e.preventDefault()
    }
    
    const handleClick = () => {
        setShowTopPopup(true);
        setTimeout(() => {
            setShowTopPopup(false);
        }, 5000)
    };


    return (
        <>
            {addModules && <div className="gap-2 flex p-5 rounded-2xl flex-col mb-4 bg-white drop-shadow-xl mx-10">
                <label className="pt-2">Title</label>
                <input type="text" className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3" placeholder="title" onChange={(e) => setTitle(e.target.value)}></input>
                <label className="pt-2">Chapter</label>
                <div className="relative">
                    <button type="button" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full text-start flex justify-between items-center" onClick={() => setIsHitChapter(!isHitChapter)}>
                        <p>{chapter}</p>
                        <img src={isHitChapter ? "/icon_svg/arrow-up.svg" : "/icon_svg/arrow-down.svg"} />
                    </button>
                    {isHitChapter &&
                        <div className="bg-white absolute border-2 border-neutral-200 text-sm rounded-2xl overflow-hidden mt-2 w-full">
                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleChapter(e, "1")}>1</button>
                            <button className="text-sm px-4 py-3 w-full" onClick={(e) => handleChapter(e, "2")}>2</button>
                        </div>}
                </div>
                <label className="pt-2">Time</label>
                <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-neutral-200 text-sm rounded-xl px-4 py-3" placeholder="time" onChange={(e) => setTime(e.target.value)}></input>
                <label className="pt-2">Video</label>
                <input type="text" className="border-2 border-neutral-200 text-sm rounded-xl px-4 py-3 mb-2" placeholder="video" onChange={(e) => setVideo(e.target.value)}></input>
                <button type="button" onClick={onSubmit}>
                    <ButtonTambahKelas title={"Tambah"} background={"#6148FF"} onClick={{onSubmit, handleClick}}></ButtonTambahKelas>
                </button>
                {showTopPopup && (<div className=" text-black flex justify-center items-center -translate-y-56">
                    <AllertReset message={message} type={type} onClose={handleClick} duration={5000} />
                </div>
                )}
            </div>}
        </>
    )
}

export default AddModules