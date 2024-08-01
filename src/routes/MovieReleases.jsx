import {useQuery} from "@tanstack/react-query";
import movieService from "../MovieService.js";
import Loader from "../components/Loader.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from "../components/Pagination.jsx";

function useNewReleases () {
    return useQuery({
        queryKey: ["new-releases"],
        queryFn: () => movieService.getUpcomingMovies()
    })
}

export default function MovieReleases() {

    const {data, error, isLoading} = useNewReleases()


    if (isLoading) return <Loader />;
    if (error) return <div>Error loading new releases</div>;

    const {results:movies, total_pages:totalPages} = data


    return (
        <div className="container mx-auto px-16 lg:px-32">
            <div className="pt-6">
                <h2 className="text-2xl font-bold">New Releases</h2>
                <div
                    className="mt-6 grid grid-cols-1  md:grid-cols-2 md:gap-x-6 xl:grid-cols-4 lg:space-y-0 gap-y-12 lg:gap-x-36 xl:gap-x-12">
                    {movies.map((movie, idx) => (
                        <MovieCard tv={false} key={idx} movie={movie}/>
                    ))}
                </div>
                <div className="mt-6 p-2 w-full rounded-md">

                </div>
            </div>
        </div>
    )
}