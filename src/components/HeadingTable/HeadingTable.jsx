import { useContext, useState } from "react"
import { HookButtonContext } from "../Context/HookButtonProvider"
/* eslint-disable react/prop-types */
const HeadingTable = ({Title, TambahButton }) => {
    const [isTambahKelas, setIsTambahKelas] = useState(false)

    const handleTambahKelas = () => {
        setIsTambahKelas(!isTambahKelas)
        console.log("tekan");
    }
    return (
        <section className="flex justify-between content-center px-16 py-10 ">
            <h1 className="text-xl font-bold ">{Title}</h1>
            <div className="flex gap-4">
                <div className={TambahButton}>
                    <div className="flex items-center bg-DARKBLUE05 rounded-2xl px-[10px] py-[5px]">
                        <img src="/icon_svg/gala_add.svg" />
                        <button type="button" className="font-bold text-white text-base px-2" onClick={handleTambahKelas}>Tambah</button>
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