/* eslint-disable react/prop-types */
const ButtonAksi = ({ title, background }) => {
    return (
        <div className="py-[3px] rounded-3xl text-white font-bold text-[10px] text-center px-3" style={{backgroundColor : background}}>
            {title}
        </div>
    )
}

export default ButtonAksi