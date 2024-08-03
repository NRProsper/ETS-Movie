import Login from "../components/Login.jsx";


export default function LoginSignUp() {
    return(
        <div className="container mx-auto px-16 lg:px-32">
            <div className="pt-40 mx-72 ">
                <div className="p-12 rounded-[12px] border-[#141414] border-2">
                    <div className="flex items-center justify-center">
                        <div className="p-3 border-2 border-[#262626] mb-6 rounded-md inline-block">
                            
                        </div>
                    </div>
                    <div className="forms">
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}