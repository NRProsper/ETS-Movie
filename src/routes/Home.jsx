import Hero from "../components/Hero.jsx";
import RecentlyUpdated from "../components/RecentlyUpdated.jsx";
import Trending from "../components/Trending.jsx";
import Releases from "../components/Releases.jsx";
import SeriesRelease from "../components/SeriesRelease.jsx";
import Recommendation from "../components/Recommendation.jsx";
import {useQuery} from "@tanstack/react-query";
import movieService from "../MovieService.js";

//Fetching all data needed by Home Page sections and passing them as props😁
const useHomeData = () => {
    return useQuery({
        queryKey: ['homeData'],
        queryFn: async () => {
            const nowPlaying = await movieService.getNowPlaying();
            const airing = await movieService.getAiring();
            const trending = await movieService.getTrending();
            const releases = await movieService.getUpcomingMovies();
            const popularSeries = await movieService.getPopularSeries();
            const popularMovies = await movieService.getPopularMovies();
            const genres = await movieService.getGenres();

            //Mapping genres names to id for easy retrieval
            const genresMap = {};
            genres.genres.forEach(genre => {
                genresMap[genre.id] = genre.name;
            });

            return {
                nowPlaying: nowPlaying.results,
                airing: airing.results,
                trending: trending.results,
                releases: releases.results,
                popularSeries: popularSeries.results,
                popularMovies: popularMovies.results,
                genres: genresMap
            }
        }
    })
}

export function Home() {

    const { data, error, isLoading } = useHomeData();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return(
        <>
            <Hero data={data.nowPlaying} genres={data.genres} />
            <RecentlyUpdated data={data.airing} />
            <Trending data={data.trending} genres={data.genres} />
            <Releases data={data.releases} />
            <SeriesRelease data={data.popularSeries} />
            <Recommendation movies={data.popularMovies} series={data.popularSeries} />
        </>
    )
}