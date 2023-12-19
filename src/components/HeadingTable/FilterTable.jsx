import { useState, useEffect } from "react";
import { getCategories } from "../../api/coursesAPI";
import Checkbox from "../CheckBox/Checkbox";

const FilterTable = () => {
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState("Kategori")
    const [idCategory, setIdCategory] = useState("")//categoryId
    const [type, setType] = useState("type")//type
    const [status, setStatus] = useState("status")//status
    const [categories, setCategories] = useState({})
    const [isHitCategory, setIsHitCategory] = useState(false)
    const [isHitType, setIsHitType] = useState(false)
    const [isHitStatus, setIsHitStatus] = useState(false)

    const filterCategory = () => {

    }

    useEffect(() => {
        getCategories()
            .then(res => {
                const response = res.data.data
                setCategories(response)
            })
    }, [])

    const handleType = (e, title) => {
        setType(title)
        e.preventDefault()
    }

    const handleStatus = (e, title) => {
        setStatus(title)
        e.preventDefault()
    }

    return (
        <div>
            <div className="flex items-center rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" onClick={() => setOpen(!open)}>
                <img src="/icon_svg/Filter.svg" />
                <button className="font-bold text-DARKBLUE05 text-base px-2">Filter</button>
            </div>
            {open && (
                <div className="fixed inset-0  flex  items-center bg-black/50">
                    <div className="bg-white rounded-2xl max-w-screen-md mx-auto relative p-5">
                        <button type="button" onClick={() => setOpen(!open)}>
                            <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                        </button>
                        <h1 className="pb-3 text-lg font-bold">Filter By</h1>
                        <div className="flex gap-5">
                            <div className="relative">
                                <p className="py-2 px-3 border-b-2">
                                    Category
                                </p>
                                {categories.map((data) => {
                                    return (
                                        <div key={data.id} className=" bg-white">
                                            <Checkbox title={data.title} id={data.id} value={data.id} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="relative">
                                <p className="py-2 px-3 border-b-2" >
                                    Type
                                </p>

                                <div className="bg-white">
                                    <Checkbox title="Free" id="free" value="FREE" />
                                    <Checkbox title="Premium" id="PREMIUM" value="PREMIUM" />
                                </div>
                            </div>

                            <div className="relative">
                                <p className="py-2 px-3 border-b-2">
                                    Status
                                </p>
                                <div className="bg-white">
                                    <Checkbox title="Approved" id="APPROVED" value="APPROVED" />
                                    <Checkbox title="Waiting" id="WAITING" value="WAITING" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterTable;