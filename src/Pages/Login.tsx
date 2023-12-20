import { Button } from "@/components/ui/button"
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="bg-home-bg bg-center bg-cover bg-no-repeat h-screen">
            <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center">
                <div className="grid grid-cols-[30rem_auto] grid-rows-1 h-3/4 w-3/5 rounded-xl max-md:grid-cols-1 max-md:w-4/5">
                    <div className="rounded-2xl max-md:hidden">
                        <img src="/assets/loginBg.jpg" className="w-full h-full rounded-s-xl" alt="loginbg" />
                    </div>
                    <div className="backdrop-blur-2xl bg-white p-4 pt-10 rounded-e-xl flex flex-col gap-4">
                        <div className="w-48 mx-auto">
                            <img src="/assets/logo.png" alt="logo" />
                        </div>
                        <label className="login-inputs">
                            <span>Email</span>
                            <input placeholder="Email" className="border-2" />
                        </label>
                        <label className="login-inputs">
                            <span>Password</span>
                            <div className="bg-white w-full rounded-xl border-2 flex items-center justify-between">
                                <input placeholder="Password" className="w-full" />
                                <button>
                                    <IoEyeSharp className="m-2" />
                                </button>
                            </div>
                        </label>
                        <div className="flex justify-center items-center gap-3">
                            <Button className="bg-blue-600 text-white rounded-xl hover:bg-blue-500">Login</Button>
                            <p className="text-blue-500">Not a user?<Link className="underline" to={"/signup"}>Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
