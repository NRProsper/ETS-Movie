import InputText from "../InputText.jsx";
import {useState} from "react";
import {auth} from "../../config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth"
import ActionButton from "./ActionButton.jsx";
import {isEmailValid} from "../../utils/validation.js";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {setUser} from "../../store/userSlice.js";

export default function Login() {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const {id, value} = e.target;
        setFormValues((prev) => ({...prev, [id]:value}))
    }

    const handleOnBlur = (e) => {
        const { id, value } = e.target;
        let error = "";

        if (id === "email") {
            error = isEmailValid(value) ? "" : "Invalid email address";
        }

        setErrors((prev) => ({ ...prev, [id]: error }));
    };

    const handleLogin = async () => {
        const { email, password } = formValues;

        await toast.promise(
            signInWithEmailAndPassword(auth, email, password)
                .then(async (result) => {
                    const token = await result.user.getIdToken();
                    console.log('Login successful. Dispatching setUser:', { email: result.user.email, token });
                    dispatch(setUser({ email: result.user.email, token }));
                    return 'Logged in successfully!';
                }),
            {
                pending: 'Logged in...',
                success: (message) => {
                    console.log('Success toast message:', message);
                    return message;
                },
                error: (error) => {
                    console.error('Error toast message:', error);
                    return error.message || 'Login failed. Please try again.';
                }
            },
            {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeButton: true
            }
        );
    };


    const hasErrors = Object.values(errors).some(error => error !== "");

    return(
        <div className="mt-6">
            <div>
                <div>
                    <InputText
                        label={"Email address"}
                        type={"email"}
                        id={"email"}
                        placeholder={"Enter your email"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                    />
                </div>

                <div>
                    <InputText
                        label={"Password"}
                        type={"password"}
                        id={"password"}
                        placeholder={"Enter your password"}
                        className={"mb-6"}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <ActionButton
                    isDisabled={hasErrors}
                    onClick={handleLogin}
                >
                    Login
                </ActionButton>
            </div>
        </div>
    )
}