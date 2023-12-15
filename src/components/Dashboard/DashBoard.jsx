import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { getCategories, orders } from "../../api/coursesAPI";

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        orders()
            .then(res => {
                setOrdersContainer(res.data?.data)
                console.log(res.data.data);
            })
    }, [])
    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
            console.log(res.data.data);
        })
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
                            TanggalBayar={data.createdAt}
                            CourseId={data.id}>
                        </DataStatusPembayaran>
                    )
                })
            }

        </section>
    )
}

export default DashBoard;