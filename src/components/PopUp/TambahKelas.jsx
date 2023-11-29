import ButtonTambahKelas from "../Button/ButtonTambahKelas";
import { useContext } from "react";
import { HookButtonContext } from "../Context/HookButtonProvider";
const TambahKelas = () => {
    const [addClass, setAddClass] = useContext(HookButtonContext)

    const handleAddClass = () => {
        if (addClass === true) {
            setAddClass(false)
        }else{
            setAddClass(true)
        }
    }
    return (
        <>
            {addClass ?
                <div className="fixed inset-0 py-5 bg-black/50">
                    <div className="bg-white rounded-2xl max-w-screen-md mx-auto">
                        <div className="px-44 relative">
                            <button type="button" onClick={handleAddClass}>
                                <img src="/icon_svg/LiveArea.svg" alt="Close icon" className="absolute top-0 right-0 pt-4 pr-4" />
                            </button>
                            <h1 className="font-bold py-11 text-2xl text-center text-DARKBLUE05">TambahKelas</h1>

                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Nama Kelas</label>
                                <input type="text" name="NamaKelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kategori</label>
                                <input type="text" name="Kategori" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Kode Kelas</label>
                                <input type="text" name="Kode Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Tipe Kelas</label>
                                <input type="text" name="Tipe Kelas" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Level</label>
                                <input type="text" name="Level" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Harga</label>
                                <input type="text" name="Harga" placeholder="Text" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                            </div>
                            <div className="pb-4">
                                <label className="block pb-2 text-xs font-semibold">Materi</label>
                                <input type="text" name="Materi" placeholder="Paragraph" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 pt-3 pb-20 w-full" />
                            </div>
                            <div className="grid grid-cols-12 gap-[15px] pb-11">
                                <div className="col-span-7"><ButtonTambahKelas background={"#FF0000"} title={"Upload Video"}></ButtonTambahKelas></div>
                                <div className="col-span-5"><ButtonTambahKelas background={"#6148FF"} title={"Simpan"}></ButtonTambahKelas></div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </>
    )
}

export default TambahKelas;