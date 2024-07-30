import {useSearchParams} from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from "../components/Pagination.jsx";
import {useQuery} from "@tanstack/react-query";
import movieService from "../MovieService.js";

const useAllMovies = (page) => {
    return useQuery({
        queryKey: ['allSeries', page],
        queryFn: () => movieService.getSeries(page),
    })
}

export default function Series() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const { data, error, isLoading } = useAllMovies(currentPage);

    const handlePageChange = (page) => {
        setSearchParams({ page });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    const { results: movies, total_pages: totalPages } = data;

    return (
        <div className="container mx-auto px-16 lg:px-32">
            <div className="pt-6">
                <h2 className="text-2xl font-bold">All Movies</h2>
                <div
                    className="mt-6 grid grid-cols-1  md:grid-cols-2 md:gap-x-6 xl:grid-cols-4 lg:space-y-0 gap-y-12 lg:gap-x-36 xl:gap-x-12">
                    {movies.map((movie, idx) => (
                        <MovieCard key={idx} movie={movie}/>
                    ))}
                </div>
                <div className="mt-6 p-2 w-full rounded-md">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )}