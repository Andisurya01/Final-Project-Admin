import HeadingTable from "../HeadingTable/HeadingTable";
import Tabel from "./Tabel";
import DataStatusPembayaran from "./DataStatusPembayaran";

const DashBoard = () => {
return(
        <section>
            <HeadingTable 
                Title={"Status Pembayaran"} 
                TambahButton={"hidden"} />
            <Tabel></Tabel>
            <DataStatusPembayaran 
                ID={"johndoe123"} 
                Kategori={"UI/UX Design"} 
                KelasPremium={"Belajar Web Designer dengan Figma"}
                Status={"SUDAH BAYAR"} 
                MetodePembayaran={"Credit Card"} 
                TanggalBayar={"21 Sep, 2023 at 2:00 AM"}>
            </DataStatusPembayaran>
        </section>
    )
}

export default DashBoard;