import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./routes/Root.jsx";
import ErrorPage from "./routes/404Page.jsx";
import {Home} from "./routes/Home.jsx";
import WatchMovie from "./routes/WatchMovie.jsx";
import {movieLoader} from "./loaders.js";
import Movies from "./routes/Movies.jsx";
import Series from "./routes/Series.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "watch-movie/:movieId",
                element: <WatchMovie />,
                loader: movieLoader
            },
            {
                path: "movies",
                element: <Movies />,
            },
            {
                path: "series",
                element: <Series />,
            }
        ]
    }
])


const App = () => (
    <RouterProvider router={router} />
)

export default App;