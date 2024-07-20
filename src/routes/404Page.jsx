
import {Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return(
        <div className="h-[100vh] fixed w-full flex items-center justify-center flex-col space-y-4">
            <h1 className="font-bold text-4xl">404 Page {error.message || error.statusText} !😢🤐 </h1>
            <p className="text-gray-400">Ooops, Unexpected error occurred !</p>
            <Link to={""} className="text-gray-400">Return to <span className="hover:underline hover:text-[red] transition-all text-white text-xl font-medium">Home Page</span></Link>
        </div>
    )
}


export default ErrorPage;