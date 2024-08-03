import SignUp from "../components/auth/SignUp.jsx";
import Login from "../components/auth/Login.jsx";
import {useState} from "react";

const tabs = [
    {
        id: 1,
        name: "Login"
    },
    {
        id: 2,
        name: "Sign up"
    }
]

export default function LoginSignUp() {

    const [currentTab, setCurrentTab] = useState(2)

    return(
        <div className="container mx-auto px-16 lg:px-32">
            <div className="pt-40 mx-72 ">
                <div className="p-12 rounded-xl border-[#141414] border-2">
                    <div className="flex items-center justify-center">
                        <div className="p-3 border-2 border-[#262626] mb-6 rounded-lg inline-block">
                            <div className="flex items-center gap-5 font-medium">
                                {
                                    tabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`px-4 py-2 ${currentTab === tab.id ? `rounded-md bg-[#E50000]`: ``}`}
                                            onClick={() => setCurrentTab(tab.id)}
                                        >
                                            {tab.name}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        {
                            currentTab === 1 ? <Login /> : <SignUp />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}