const Tabel = () => {
    return (
        <section className="px-16 ">
            <div className="grid grid-cols-8 gap-3 px-5 py-[9px] bg-[#EBF3FC]">
                <div>
                    <p className="text-xs font-normal">ID</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Kategori</p>
                </div>
                <div className="col-span-2">
                    <p className="text-xs font-normal">Kelas Premium</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Status</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Metode Pembayaran</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Tanggal Bayar</p>
                </div>
            </div>
        </section>
    )
}

export default Tabel