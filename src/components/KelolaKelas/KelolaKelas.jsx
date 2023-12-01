import { useEffect , useState } from "react";
// import api from "../../api/coursesAPI";
import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "../KelolaKelas/Tabel";
import DataTabelKelas from "./DataTabelKelas";

const KelolaKelas = () => {
    
    const [ courses , setCourses ] = useState([])

    // useEffect(() => {
    //     api.getCourses()
    //     console.log();
    //     .then(res => setCourses(res.data) )
    // })

    return (
        <section>
            <HeadingTable Title={"Kelola Kelas"} TambahButton={""} />
            <Tabel></Tabel>

            {/* {
                courses.map(( data ) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <DataTabelKelas 
                            KodeKelas={data.classCode} 
                            Kategori={data.category.title} 
                            NamaKelas={data.title} 
                            TipeKelas={data.type} 
                            Level={data.level} 
                            HargaKelas={data.price}>
                        </DataTabelKelas>
                        )
                })
            } */}
        </section>
    )
}

export default KelolaKelas;