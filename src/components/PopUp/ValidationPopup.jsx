import ButtonTambahKelas from "../Button/ButtonTambahKelas"
import { useContext } from "react"
import { HookButtonContext } from "../Context/HookButtonProvider"
const ValidationPopUp = () => {
    const [addClass, setAddClass] = useContext(HookButtonContext)

    const handleBack = () => {
        if (addClass === true) {
            setAddClass(false)
        }else{
            setAddClass(true)
        }
    }

    const handleExit = () => {
        localStorage.removeItem("token")
    }
    return (
        <section className="fixed inset-0 bg-black/50">
            <div className="flex bg-white text-center flex-col px-5 w-60 mx-auto rounded-2xl">
                <div className="p-5">
                    <h1 className="font-bold">
                        Apakah anda yakin ingin keluar?
                    </h1>
                    <div className="flex gap-[15px] pt-5">
                        <button onClick={handleExit}>
                            <ButtonTambahKelas title={"Keluar"} background={"#6148FF"}></ButtonTambahKelas>
                        </button>
                        <button onClick={handleBack}>
                            <ButtonTambahKelas title={"Batal"} background={"#FF0000"}></ButtonTambahKelas>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ValidationPopUp