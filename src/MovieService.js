import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})


export default {
    getNowPlaying() {
        return apiClient.get("movie/now_playing?api_key="+API_KEY)
    },
    getPopularMovies() {
        return apiClient.get("movie/popular?api_key="+API_KEY)
    },
    getTrending() {
        return apiClient.get("trending/all/day?api_key="+API_KEY)
    },
    getUpcomingMovies() {
        return apiClient.get("movie/upcoming?api_key="+API_KEY)
    },
    getGenres() {
        return apiClient.get(`genre/movie/list?api_key=${API_KEY}`);
    },
    getAiring() {
        return apiClient.get(`tv/airing_today?api_key=${API_KEY}`);
    },
    getPopularSeries() {
        return apiClient.get(`tv/popular?api_key=${API_KEY}`);
    },
    getMoviesByGenre(genreId) {
        return apiClient.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    },
    getPoster(url) {
        return `https://image.tmdb.org/t/p/original/${url}`
    },
    getMovieById(movieId) {
        return apiClient.get(`movie/${movieId}?api_key=${API_KEY}`);
    },
    getMovieVideos(movieId) {
        return apiClient.get(`movie/${movieId}/videos?api_key=${API_KEY}`);
    }
}