/* eslint-disable react/prop-types */
const DataStatusPembayaran = ({ ID, Kategori, KelasPremium, Status, MetodePembayaran, TanggalBayar }) => {
    return (
        <section className="px-16">
            <div className="grid grid-cols-8 px-5 py-3 gap-3 items-center">
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{ID}</p></div>
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{Kategori}</p></div>
                <div className="text-[10px] font-bold col-span-2"><p>{KelasPremium}</p></div>
                <div className="text-xs font-bold "><p>{Status}</p></div>
                <div className="text-[10px] font-bold "><p>{MetodePembayaran}</p></div>
                <div className="text-[10px] font-bold "><p>{TanggalBayar}</p></div>
            </div>
        </section>
    )
}

export default DataStatusPembayaran