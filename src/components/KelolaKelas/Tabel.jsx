const Tabel = () => {
    return (
        <section className="px-16 ">
            <div className="grid grid-cols-8 gap-3 px-5 py-[9px] bg-[#EBF3FC]">
                <div>
                    <p className="text-xs font-normal">Kode Kelas</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Kategori</p>
                </div>
                <div className="col-span-2">
                    <p className="text-xs font-normal">Nama Kelas</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Tipe Kelas</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Level</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Harga Kelas</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Aksi</p>
                </div>
            </div>
        </section>
    )
}

export default Tabel