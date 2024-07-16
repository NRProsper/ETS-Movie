import {FaArrowRight as Arrow} from "react-icons/fa";
import {useEffect, useState} from "react";
import movieService from "../MovieService.js";
import TrendCard from "./TrendCard.jsx";



const Trending = () => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState({})

    useEffect(() => {
        movieService.getTrending()
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            });

        movieService.getGenres()
            .then((response) => {
                const genresMap = {}
                const genresArray = response.data.genres
                genresArray.forEach(genre => {
                    genresMap[genre.id] = genre.name;
                });
                setGenres(genresMap)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    const getGenreNames = (genreIds) => {
        return genreIds.map(id => genres[id]);
    };

    return (
        <section id="trending">
            <div className="container mx-auto px-16 lg:px-32">
                <div className="flex-between mb-8">
                    <h2 className="text-2xl font-bold">Trending</h2>
                    <div className="flex-center text-[#D9D9D9FF] text-2xl gap-[8px] cursor-pointer">
                        <span className="capitalize">View all</span>
                        <Arrow />
                    </div>
                </div>
                <div className="grid gap-y-12 md:grid-cols-2 xl:grid-cols-4 md:space-x-4">
                    {movies.slice(0, 4).map(movie => (
                        <TrendCard key={movie.id} movie={movie} genres={getGenreNames(movie.genre_ids)} />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Trending;