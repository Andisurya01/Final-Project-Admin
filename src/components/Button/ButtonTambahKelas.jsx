/* eslint-disable react/prop-types */
const ButtonTambahKelas = ({ title, background }) => {
    return (
        <div className="p-3 rounded-3xl text-white font-bold text-base w-full text-center" style={{backgroundColor : background}}>
            {title}
        </div>
    )
}

export default ButtonTambahKelas