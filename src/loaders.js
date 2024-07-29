import movieService from "./MovieService.js";

export const movieLoader = async ({params}) => {
    const {movieId} = params;
    try {
        const response = await movieService.getMovieById(movieId);
        return { movieData: response.data };
    } catch (error) {
        throw new Error("Failed to fetch movie data");
    }
}

export const allMoviesLoader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1; // Default to page 1 if not provided

    try {
        const response = await movieService.getMovies(page);
        return { allMovies: response.data.results, totalPages: response.data.total_pages };
    } catch (error) {
        throw new Error("Failed to fetch movies");
    }
}