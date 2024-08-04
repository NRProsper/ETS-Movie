import InputText from "../InputText.jsx";


export default function SignUp() {
    return(
        <div className="mt-6">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <InputText
                        label={"First name"}
                        type={"fname"}
                        name={"fname"}
                        id={"fname"}
                        placeholder={"Enter your first name"}
                        className={"mb-6"}
                    />
                    <InputText
                        label={"Last name"}
                        type={"lname"}
                        name={"lname"}
                        id={"lname"}
                        placeholder={"Enter your last name"}
                        className={"mb-6"}
                    />
                </div>
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
                    Sign up
                </button>
            </div>
        </div>
    )
}