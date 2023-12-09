import { useEffect, useState } from "react";
import { getCourses } from "../../api/coursesAPI";
import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "../KelolaKelas/Tabel";
import DataTabelKelas from "./DataTabelKelas";

const KelolaKelas = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
            .then(res => setCourses(res.data.data))
    })

    return (
        <section>
            <HeadingTable Title={"Kelola Kelas"} TambahButton={""} />
            <Tabel></Tabel>
            {
                courses.map((data) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <DataTabelKelas
                            key={data.id}
                            id={data.id}
                            KodeKelas={data.classCode}
                            Kategori={data.category.title}
                            NamaKelas={data.title}
                            TipeKelas={data.type}
                            Level={data.level}
                            HargaKelas={data.price}>
                        </DataTabelKelas>
                    )
                })
            }
        </section>
    )
}

export default KelolaKelas;