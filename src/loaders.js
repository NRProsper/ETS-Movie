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