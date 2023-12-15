import LoginForm from "../components/Login/LoginForm";
import logo from "../assets/craftiq.png"
const LoginPages = () => {
    return (
        <>
            <section className="mx-auto">
                <div className="md:grid md:grid-cols-12 ">
                    <div className="col-span-4 hidden bg-DARKBLUE05 h-screen md:grid place-content-center">
                        <div className="flex justify-center items-center">
                            <img src={logo} className="w-1/2"/>
                        </div>
                    </div>
                    <div className="md:col-span-8 my-auto md:py-0 py-60 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-10">
                        <LoginForm />
                    </div>

                </div>
            </section>
        </>
    )
}

export default LoginPages;