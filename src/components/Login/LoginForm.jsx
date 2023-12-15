import Button from "../Button/ButtonLogin"
import { useState } from "react"
import { postLoginAdmin } from "../../api/coursesAPI";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const [password, setPassword] = useState("")
    const [isLoginDone, setIsLoginDone] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async () => {
        try {
            setIsLoginDone(false)
            const payload = {
                emailOrPhone,
                password
            }
            const data = await postLoginAdmin(payload)
            console.log(data);
            console.log(payload);
            document.cookie = `token=${data.data.data.accessToken}`
            setEmailOrPhone("")
            setPassword("")
            navigate("/dashboard")
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoginDone(true)
            console.log(isLoginDone);
        }
    }

    return (
        <section className="">
            <form className="" onSubmit={onSubmit}>
                <h1 className="font-bold pb-16 text-2xl text-center text-DARKBLUE05">Login</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">ID Admin</label>
                    <input type="email" name="email" placeholder="ID Admin" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
                </div>
                <div className="pb-4">
                    <div>
                        <label className="float-left pb-2 text-xs">Password</label>
                        <label className="float-right text-xs font-medium text-DARKBLUE05">Lupa Kata Sandi</label>
                    </div>
                    <input type="password" name="password" placeholder="Masukkan Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={onSubmit} className="w-full">
                    <Button warna={"bg-DARKBLUE05"} title={"Masuk"}></Button>
                </button>
            </form>
        </section>
    )
}

export default LoginForm