import {FaArrowRight as Arrow} from "react-icons/fa";
import {useEffect, useState} from "react";
import movieService from "../MovieService.js";
import MovieCard from "./MovieCard.jsx";

const Releases = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        movieService.getPopularSeries()
            .then((response) => {
                setMovies(response.data.results)
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return(
        <section id="releases" className="my-16">
            <div className="container mx-auto px-32">
                <div className="flex-between mb-8">
                    <h2 className="text-2xl font-bold">New Releases - Series</h2>
                    <div className="flex-center text-[#D9D9D9FF] text-2xl gap-[8px] cursor-pointer">
                        <span className="capitalize">View all</span>
                        <Arrow/>
                    </div>
                </div>
                <div className="flex-between">
                    {movies.slice(0, 4).map((movie, idx) => (
                        <MovieCard key={idx} movie={movie} tv={true} />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Releases;