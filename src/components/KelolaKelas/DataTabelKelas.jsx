/* eslint-disable react/prop-types */
import { useState } from "react"
import ButtonAksi from "../Button/ButtonAksi"
import { deleteCourseById } from "../../api/coursesAPI"

const DataTabelKelas = ({ KodeKelas, Kategori, NamaKelas, TipeKelas, Level, HargaKelas, id }) => {
    const [warna, setWarna] = useState("")
    const handleDelete = () => {
        deleteCourseById(id).then(res => {
            console.log(id);
            console.log(res.status);
        })
    }
    return (
        <section className="px-16">
            <div className="grid grid-cols-8 px-5 py-3 gap-3 items-center">
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{KodeKelas}</p></div>
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{Kategori}</p></div>
                <div className="text-[10px] font-bold col-span-2"><p>{NamaKelas}</p></div>
                <div className="text-xs font-bold "><p className={warna}>{TipeKelas}</p></div>
                <div className="text-[10px] font-bold "><p>{Level}</p></div>
                <div className="text-[10px] font-bold "><p>{HargaKelas}</p></div>
                <div className="flex gap-[5px]">
                    <button>
                        <ButtonAksi title="Ubah" background="#6148FF" />
                    </button>
                    <button onClick={handleDelete}>
                        <ButtonAksi title="Hapus" background="#FF0000" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DataTabelKelas