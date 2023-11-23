/* eslint-disable react/prop-types */
const Card = ({ background, number, title }) => {
    return (
        <div className="rounded-2xl w-full" style={{backgroundColor : background}}>
            <div className="flex p-6">
                <div className="p-[14px] bg-white rounded-3xl">
                    <img src="/icon_svg/Users.svg" alt="User Logo" className="w-8 bg-white" />
                </div>
                <div className="pl-6 gap-[6px]">
                    <h1 className="font-normal text-2xl text-white">{number}</h1>
                    <p className="font-bold text-xl text-white">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card