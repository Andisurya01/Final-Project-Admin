import { useState } from "react";
import Checkbox from "../CheckBox/Checkbox";

const FilterTablePayment = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="flex items-center rounded-2xl px-[10px] py-[5px]  border-DARKBLUE05 border" onClick={() => setOpen(!open)}>
                <img src="/icon_svg/Filter.svg" />
                <button className="font-bold text-DARKBLUE05 text-base px-2">Filter</button>
            </div>
            {open && (
                <div className="fixed inset-0 flex  items-center bg-black/50">
                    <div className="bg-white relative rounded-2xl max-w-screen-md mx-auto p-5">
                        <button type="button" onClick={() => setOpen(!open)}>
                            <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                        </button>
                        <h1 className="pb-3 text-lg font-bold">Filter By</h1>
                        <div className="flex gap-5">
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
                        <div className=" bottom-0 right-0 pt-3 flex justify-center gap-2">
                            <button id="filterButton" className="bg-SUCCESS text-white text-sm font-medium py-2 px-3 rounded-lg">Terapkan</button>
                            <button id="deleteFilter" className="bg-WARNING text-white text-sm font-medium py-2 px-3 rounded-lg">Hapus Filter</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterTablePayment;