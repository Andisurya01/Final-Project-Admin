import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";
import { useEffect, useState } from "react";
import { getCategories, orders } from "../../api/coursesAPI";
import moment from "moment";

const DashBoard = () => {
    const [ordersContainer, setOrdersContainer] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        orders()
            .then(res => {
                setOrdersContainer(res.data?.data)
            })
    }, [])

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.data)
        })
    }, [])

    const handleCategory = (id) => {
        const category = categories.find((category) => category.id === id)
        return category?.title
    }
    return (
        <section>
            <HeadingTable
                Title={"Status Pembayaran"}
                TambahButton={"hidden"} />
            <Tabel></Tabel>
            {
                ordersContainer?.map((data) => {
                    const newDate = moment(data.createdAt).format('lll');
                    handleCategory(data.course.categoryId)
                    return (
                        <DataStatusPembayaran
                            key={data.id}
                            ID={data.user.name}
                            Kategori={handleCategory(data.course.categoryId)}
                            KelasPremium={data.course.type}
                            Status={data.status}
                            MetodePembayaran={"Credit Card"}
                            TanggalBayar={newDate}
                            CourseId={data.id}>
                        </DataStatusPembayaran>
                    )
                })
            }

        </section>
    )
}

export default DashBoard;