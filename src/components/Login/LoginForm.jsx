import Button from "../Button/ButtonLogin"

const LoginForm = () => {
    return (
        <section className="">
            <div className="">
                <h1 className="font-bold pb-16 text-2xl text-center text-DARKBLUE05">Login</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">ID Admin</label>
                    <input type="email" name="email" placeholder="ID Admin" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                </div>
                <div className="pb-4">
                    <div>
                        <label className="float-left pb-2 text-xs">Password</label>
                        <label className="float-right text-xs font-medium text-DARKBLUE05">Lupa Kata Sandi</label>
                    </div>
                    <input type="password" name="password" placeholder="Masukkan Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                </div>
                <Button warna={"bg-DARKBLUE05"} title={"Masuk"}></Button>
            </div>
        </section>
    )
}

export default LoginForm