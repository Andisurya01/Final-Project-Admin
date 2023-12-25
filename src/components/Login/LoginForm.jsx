import Button from "../Button/ButtonLogin"
import { useState, useEffect } from "react"
import { postLoginAdmin } from "../../api/coursesAPI";
import { useNavigate } from "react-router-dom";
import AllertReset from "../Allert/AllertReset";


const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const [password, setPassword] = useState("")
    const [, setIsLoginDone] = useState(false)
    const [failMail, setFailMail] = useState(false);
    const [failPass, setFailPass] = useState(false);
    const [alertStatus, setAlertStatus] = useState(false);
    const [alertAction, setAlertAction] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setAlertTime();
    });

    const setAlertTime = () => {
        if (alertAction) {
            setTimeout(() => {
                setAlertAction(false);
            }, 5000);
        }
    };

    const onSubmit = async () => {
        try {
            if (emailOrPhone == "" && password == "") {
                setFailMail(true)
                setFailPass(true)
                setAlertAction(true)
                setAlertStatus(false)
                setAlertMsg("Toloong Email dan Password Diisi !!")
                return false
            }

            setIsLoginDone(false)
            setFailMail(false)
            setFailPass(false)
            const payload = {
                emailOrPhone,
                password
            }
            const data = await postLoginAdmin(payload)
            if (data.response != null) {
                const msg = data.response.data.message;
                if (msg == "Wrong Password") {
                    setFailPass(true);
                    setAlertAction(true);
                    setAlertStatus(false);
                    setAlertMsg("Maaf, kata sandi salah");
                } else if (msg == "Email or Phone not Registered") {
                    setFailMail(true);
                    setAlertAction(true);
                    setAlertStatus(false);
                    setAlertMsg("Alamat email tidak terdaftar!");
                }
            } else {
                document.cookie = `token=${data.data.data.accessToken}`;
                setEmailOrPhone("");
                setPassword("");
                navigate("/dashboard");
                window.location.reload();
            }
            // console.log(data);
            // console.log(payload);
            // document.cookie = `token=${data.data.data.accessToken}`
            // console.log(data.data.message);
            // setEmailOrPhone("")
            // setPassword("")
            // navigate("/dashboard")
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoginDone(true)
        }
    }

    return (
        <section className="">
            <form className="" onSubmit={onSubmit}>
                <h1 className="font-bold pb-16 text-2xl text-center text-DARKBLUE05">Login</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">ID Admin</label>
                    {/* <input type="email" name="email" placeholder="ID Admin" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} /> */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Contoh: johndee@gmail.com"
                        className={` ${failMail
                            ? "border-2 border-WARNING "
                            : "border-2 border-neutral-200"
                            } border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full`}
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                </div>
                <div className="pb-4">
                    <div>
                        <label className="float-left pb-2 text-xs">Password</label>
                    </div>
                    {/* <input type="password" name="password" placeholder="Masukkan Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Masukkan Password"
                        className={` ${failPass
                            ? "border-2 border-WARNING "
                            : "border-2 border-neutral-200"
                            } border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={onSubmit} className="w-full">
                    <Button warna={"bg-DARKBLUE05"} title={"Masuk"}></Button>
                </button>
                <div className="relative w-[100%] flex justify-center">
                    {alertAction ? (
                        <div className="absolute mt-[40px] ">
                            <AllertReset
                                message={alertMsg}
                                type={alertStatus ? "success" : "warning"}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </form>
        </section>
    )
}

export default LoginForm