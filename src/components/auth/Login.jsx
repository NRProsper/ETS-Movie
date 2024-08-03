import InputText from "../InputText.jsx";


export default function Login() {
    return(
        <div className="mt-6">
            <div>
                <InputText
                    label={"Email address"}
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    placeholder={"Enter your email"}
                    className={"mb-6"}
                />

                <InputText
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    id={"password"}
                    placeholder={"Enter your password"}
                    className={"mb-6"}
                />
            </div>
            <div className="flex items-center justify-end">
                <button className="bg-[#E50000] font-semibold px-6 py-3 rounded-md">
                    Login
                </button>
            </div>
        </div>
    )
}