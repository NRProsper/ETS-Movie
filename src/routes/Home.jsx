import Hero from "../components/Hero.jsx";
import RecentlyUpdated from "../components/RecentlyUpdated.jsx";
import Trending from "../components/Trending.jsx";
import Releases from "../components/Releases.jsx";
import SeriesRelease from "../components/SeriesRelease.jsx";
import Recommendation from "../components/Recommendation.jsx";

export function Home() {
    return(
        <>
            <Hero />
            <RecentlyUpdated />
            <Trending />
            <Releases />
            <SeriesRelease />
            <Recommendation />
        </>
    )
}