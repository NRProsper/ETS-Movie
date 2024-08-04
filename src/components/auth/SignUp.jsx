import InputText from "../InputText.jsx";
import {useState} from "react";


export default function SignUp() {

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleOnChange = (e) => {
        const {id, value} = e.target;
        setFormValues((prev) => ({...prev, [id]:value}))
    }

    return(
        <div className="mt-6">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <InputText
                        label={"First name"}
                        type={"fname"}
                        id={"firstName"}
                        placeholder={"Enter your first name"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                    />
                    <InputText
                        label={"Last name"}
                        type={"text"}
                        id={"lastName"}
                        placeholder={"Enter your last name"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                    />
                </div>
                <InputText
                    label={"Email address"}
                    type={"email"}
                    id={"email"}
                    placeholder={"Enter your email"}
                    className={"mb-6"}
                    onChange={handleOnChange}
                />

                <div className="grid grid-cols-2 gap-2">
                    <InputText
                        label={"Password"}
                        type={"password"}
                        id={"password"}
                        placeholder={"Enter your password"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                    />
                    <InputText
                        label={"Confirm password"}
                        type={"password"}
                        id={"cpassword"}
                        placeholder={"Enter password again"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button className="bg-[#E50000] font-semibold px-6 py-3 rounded-md">
                    Sign up
                </button>
            </div>
        </div>
    )
}