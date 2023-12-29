/* eslint-disable react/prop-types */
import { useState } from "react"
import ButtonAksi from "../Button/ButtonAksi"
import { deleteCourseById } from "../../api/coursesAPI"
import ButtonTambahKelas from "../Button/ButtonTambahKelas"
import EditKelas from "../PopUp/EditKelas"

const DataTabelKelas = ({ KodeKelas, Kategori, NamaKelas, TipeKelas, Level, HargaKelas, id }) => {
    const handleDelete = () => {
        deleteCourseById(id)
    }

    const [editCourse, setEditCourse] = useState(false)
    const [isVerifiedDelete, setIsVerifiedDelete] = useState(false)
    return (
        <section className="px-16">
            <div className="grid grid-cols-8 px-5 py-3 gap-3 items-center">
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{KodeKelas}</p></div>
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{Kategori}</p></div>
                <div className="text-[10px] font-bold col-span-2"><p>{NamaKelas}</p></div>
                <div className={TipeKelas === "FREE" ? "text-xs font-bold text-SUCCESS" : "text-xs font-bold text-DARKBLUE05"}><p>{TipeKelas}</p></div>
                <div className="text-[10px] font-bold "><p>{Level}</p></div>
                <div className="text-[10px] font-bold "><p>{HargaKelas}</p></div>
                <div className="flex gap-[5px]">
                    <button onClick={() => setEditCourse(!editCourse)}>
                        <ButtonAksi title="Ubah" background="#6148FF" />
                    </button>
                    <button onClick={() => setIsVerifiedDelete(!isVerifiedDelete)}>
                        <ButtonAksi title="Hapus" background="#FF0000" />
                    </button>
                </div>
                {isVerifiedDelete ? (
                    <section className="fixed inset-0 bg-black/50 flex justify-center items-center">
                        <div className=" bg-white text-center flex-col px-5 w-60  rounded-2xl">
                            <div className="p-5">
                                <h1 className="font-bold">
                                    Apakah anda yakin ingin menghapus?
                                </h1>
                                <div className="flex gap-[15px] pt-5">
                                    <button onClick={() => handleDelete()}>
                                        <ButtonTambahKelas title={"hapus"} background={"#6148FF"}></ButtonTambahKelas>
                                    </button>
                                    <button onClick={() => setIsVerifiedDelete(!isVerifiedDelete)}>
                                        <ButtonTambahKelas title={"Batal"} background={"#FF0000"}></ButtonTambahKelas>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {editCourse ? <EditKelas editCourse={editCourse} setEditCourse={setEditCourse} id={id}/> : null}
            </div>
        </section>
    )
}

export default DataTabelKelas