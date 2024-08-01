import movieService from "./MovieService.js";
import {useQuery} from "@tanstack/react-query";

export const movieLoader = async ({ params }) => {
    const { movieId } = params;
    try {
        const movieData = await movieService.getMovieById(movieId);
        return { movieData };
    } catch (error) {
        throw new Error("Failed to fetch movie data");
    }
};

export const tvLoader = async ({params}) => {
    const {tvId} = params;
    try {
        const tvData = await movieService.getTvDetails(tvId);
        return { tvData };
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

export const allSeriesLoader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1; // Default to page 1 if not provided

    try {
        const response = await movieService.getSeries(page);
        return { allMovies: response.data.results, totalPages: response.data.total_pages };
    } catch (error) {
        throw new Error("Failed to fetch Series");
    }
}