import LoginForm from "../components/Login/LoginForm";
const LoginPages = () => {
    return (
        <>
            <section className="mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-4 bg-DARKBLUE05 h-screen">

                    </div>
                    <div className="col-span-8 my-auto px-80">
                        <LoginForm />
                    </div>

                </div>
            </section>
        </>
    )
}

export default LoginPages;