import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import RecentlyUpdated from "./components/RecentlyUpdated.jsx";
import Trending from "./components/Trending.jsx"
import Releases from "./components/Releases.jsx";
import SeriesRelease from "./components/SeriesRelease.jsx";
import Recommendation from "./components/Recommendation.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <RecentlyUpdated />
                <Trending />
                <Releases />
                <SeriesRelease />
                <Recommendation />
            </main>
            <Footer />
        </>
    )
}

export default App
