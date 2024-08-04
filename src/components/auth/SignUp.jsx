import InputText from "../InputText.jsx";
import { useState } from "react";
import { isEmailValid, isPasswordValid, doPasswordsMatch } from "../../../utils/validation.js";
import ActionButton from "./ActionButton.jsx";

export default function SignUp() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        cpassword: ""
    });
    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prev) => ({ ...prev, [id]: value }));
    };

    const handleOnBlur = (e) => {
        const { id, value } = e.target;
        let error = "";

        if (id === "email") {
            error = isEmailValid(value) ? "" : "Invalid email address";
        } else if (id === "password") {
            error = isPasswordValid(value) ? "" : "Password must be at least 8 characters";
        } else if (id === "cpassword") {
            error = doPasswordsMatch(formValues.password, value) ? "" : "Passwords do not match";
        }

        setErrors((prev) => ({ ...prev, [id]: error }));
    };

    const hasErrors = Object.values(errors).some(error => error !== "");


    return (
        <div className="mt-6">
            <div>
                <div className="mb-6">
                    <InputText
                        label={"Email address"}
                        type={"email"}
                        id={"email"}
                        placeholder={"Enter your email"}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        hasError={!!errors.email}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                        <InputText
                            label={"Password"}
                            type={"password"}
                            id={"password"}
                            placeholder={"Enter your password"}
                            onChange={handleOnChange}
                            onBlur={handleOnBlur}
                            hasError={!!errors.password || !!errors.cpassword}
                        />
                        <InputText
                            label={"Confirm password"}
                            type={"password"}
                            id={"cpassword"}
                            placeholder={"Enter password again"}
                            onChange={handleOnChange}
                            onBlur={handleOnBlur}
                            hasError={!!errors.cpassword || !!errors.password}
                        />
                    </div>
                    {errors.password && <span className="form-error">{errors.password}</span>}
                    {errors.cpassword && <span className="form-error">{errors.cpassword}</span>}
                </div>
            </div>
            <div className="flex items-center justify-end">
                <ActionButton
                    isDisabled={hasErrors}
                >
                    Sign up
                </ActionButton>
            </div>
        </div>
    );
}
