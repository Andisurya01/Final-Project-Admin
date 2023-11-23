const Navbar = () => {
    return (
        <div className="bg-LIGHTBLUE05 items-center py-7 px-16">
            <div className="flex flex-row justify-between items-center ">
                <div className="">
                    <h1 className="font-bold text-2xl text-DARKBLUE05 ">Hi, Admin!</h1>
                </div>
                <div className="relative flex items-center">
                    <input className="px-6 py-3 font-normal text-xs rounded-2xl w-64 h-16 " placeholder="Cari" ></input>
                    <img src="/icon_svg/bx_search-alt.svg" alt="Search Logo" className="p-[7px] bg-DARKBLUE05 rounded-[10px] absolute translate-x-48 cursor-pointer" onClick={()=>{console.log("tertekan")}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;