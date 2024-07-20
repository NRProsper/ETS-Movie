import movieService from "../MovieService.js";
import {Outlet, useLoaderData, useNavigation} from "react-router-dom";
import {useState} from "react";

export  const loader = async () => {
    try {
        const response = await movieService.getGenres();
        return response.data;
    } catch (error) {
        throw new Error('Failed to load genres');
    }
}

export function Genre() {
    const navigate = useNavigation()
    const data = useLoaderData();
    const genres = data.genres;
    const [selectedGenre, setSelectedGenre] = useState()

    const handleGenreClick = (genreId) => {
        setSelectedGenre(genreId)
        navigate(`/genre/${genreId}`)
    }

    return(
        <>
            <div className="side-bar h-[870px] w-[240px] px-4 fixed overflow-auto">
                <div className="genres-container">
                    {
                        genres.map((genre, idx) => (
                            <a key={idx} href="#"
                               className="block px-4 py-2 rounded-md mb-2 hover:text-[red] font-medium transition-all"
                               onClick={() => handleGenreClick(genre.id)}
                            >{genre.name}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="ml-[240px] right-0 px-16">
                <div className="pt-64 flex items-center justify-center flex-col">
                    <h1 className="text-4xl text-gray-400 font-bold">Please select the genre to view movies</h1>
                </div>
            </div>
        </>
    )
}