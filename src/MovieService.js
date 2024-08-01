import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

const movieService = {
    getMovies: async (page = 1) => {
        const response = await apiClient.get(`movie/popular?api_key=${API_KEY}&page=${page}`);
        return response.data;
    },
    getSeries: async (page = 1) => {
        const response = await apiClient.get(`tv/popular?api_key=${API_KEY}&page=${page}`);
        return response.data;
    },
    getNowPlaying: async () => {
        const response = await apiClient.get(`movie/now_playing?api_key=${API_KEY}`);
        return response.data;
    },
    getPopularMovies: async () => {
        const response = await apiClient.get(`movie/popular?api_key=${API_KEY}`);
        return response.data;
    },
    getTrending: async () => {
        const response = await apiClient.get(`trending/all/day?api_key=${API_KEY}`);
        return response.data;
    },
    getUpcomingMovies: async () => {
        const response = await apiClient.get(`movie/upcoming?api_key=${API_KEY}`);
        return response.data;
    },
    getGenres: async () => {
        const response = await apiClient.get(`genre/movie/list?api_key=${API_KEY}`);
        return response.data;
    },
    getAiring: async () => {
        const response = await apiClient.get(`tv/airing_today?api_key=${API_KEY}`);
        return response.data;
    },
    getPopularSeries: async () => {
        const response = await apiClient.get(`tv/popular?api_key=${API_KEY}`);
        return response.data;
    },
    getMoviesByGenre: async (genreId) => {
        const response = await apiClient.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        return response.data;
    },
    getPoster: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    getMovieById: async (movieId) => {
        const response = await apiClient.get(`movie/${movieId}?api_key=${API_KEY}`);
        return response.data;
    },
    getMovieVideos: async (movieId) => {
        const response = await apiClient.get(`movie/${movieId}/videos?api_key=${API_KEY}`);
        return response.data;
    },
    getTvDetails: async (tvId) => {
        const response = await apiClient.get(`tv/${tvId}?api_key=${API_KEY}`);
        return response.data;
    },
    getSeriesVideo: async (tvId) => {
        const response = await apiClient.get(`tv/${tvId}/videos?api_key=${API_KEY}`);
        return response.data;
    },
    searchMulti: async (query) => {
        const response = await apiClient.get(`search/multi`, {
            params: {
                api_key: API_KEY,
                query,
                include_adult: false
            }
        });
        return response.data.results;
    }
};

export default movieService;
