import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./routes/Root.jsx";
import {Home} from "./routes/Home.jsx";
import ErrorPage from "./routes/404Page.jsx";
import WatchMovie from "./routes/WatchMovie.jsx";
import {movieLoader, allMoviesLoader, allSeriesLoader} from "./loaders.js";
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
                loader: allMoviesLoader
            },
            {
                path: "series",
                element: <Series />,
                loader: allSeriesLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
