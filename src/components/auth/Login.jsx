import InputText from "../InputText.jsx";
import {useState} from "react";


export default function Login() {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const {id, value} = e.target;
        setFormValues((prev) => ({...prev, [id]:value}))
        console.log(formValues)
    }

    return(
        <div className="mt-6">
            <div>
                <InputText
                    label={"Email address"}
                    type={"email"}
                    id={"email"}
                    placeholder={"Enter your email"}
                    className={"mb-6"}
                    onChange={handleOnChange}
                />

                <InputText
                    label={"Password"}
                    type={"password"}
                    id={"password"}
                    placeholder={"Enter your password"}
                    className={"mb-6"}
                    onChange={handleOnChange}
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