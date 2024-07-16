import {FaArrowRight as Arrow} from "react-icons/fa";
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard.jsx";
import movieService from "../MovieService.js";



const Recommendation = () => {

    const filters = [
        {
            id: 1,
            title: "Movies"
        },
        {
            id: 2,
            title: "Series"
        },
        {
            id: 3,
            title: "Animation"
        }
    ]

    let [filter, setFilter] = useState(1);
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        if(filter===1) {
            movieService.getPopularMovies()
                .then((response) => {
                    setMovies(response.data.results)
                })
                .catch((error) => {
                    console.log(error)
                })
        }else if(filter === 2) {
            movieService.getPopularSeries()
                .then((response) => {
                    setMovies(response.data.results)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [filter]);

    return (
        <section id="recommedation">
            <div className="container mx-auto px-16 lg:px-32">
                <div className="flex-between flex-col md:flex-row mb-8">
                    <div className="flex-center flex-col md:flex-row gap-4">
                        <h2 className="text-2xl font-bold">Recommended</h2>
                        <div className="filter flex-center gap-4">
                            {filters.map(f => (
                                <span
                                    key={f.id}
                                    className={`pill-outline cursor-pointer ${filter === f.id ? `p-active` : ``}`}
                                    onClick={() => setFilter(f.id)}
                                >
                                    {f.title}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-center text-[#D9D9D9FF] text-2xl gap-[8px] cursor-pointer">
                        <span className="capitalize">View all</span>
                        <Arrow/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    {movies.slice(0, 8).map((movie, idx) => (
                        <div key={idx} className="w-full md:w-1/2 xl:w-1/4 p-4">
                            <MovieCard  movie={movie} tv={filter !== 1} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recommendation;