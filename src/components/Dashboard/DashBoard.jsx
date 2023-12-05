import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { orders } from "../../api/coursesAPI";

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([])
    useEffect(() => {
        const fetchData = async() =>{
            const response = await orders()
            setOrdersContainer(response.data.data)
        }

        fetchData()
        // orders()
        //     .then(res => {
        //         setOrdersContainer(res.data.data)
        //     })
    }, [])
    return (
        <section>
            <HeadingTable
                Title={"Status Pembayaran"}
                TambahButton={"hidden"} />
            <Tabel></Tabel>
            {
                ordersContainer.map((data) => {
                    return (
                        <DataStatusPembayaran
                            key={data.id}
                            ID={data.user.name}
                            Kategori={"UI/UX Design"}
                            KelasPremium={data.course.type}
                            Status={data.status}
                            MetodePembayaran={"Credit Card"}
                            TanggalBayar={data.createdAt}>
                        </DataStatusPembayaran>
                    )
                })
            }

        </section>
    )
}

export default DashBoard;