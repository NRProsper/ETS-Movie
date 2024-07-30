import {FaArrowRight as Arrow} from "react-icons/fa";
import MovieCard from "./MovieCard.jsx";

const Releases = ({data}) => {


    return(
        <section id="releases" className="my-16">
            <div className="container mx-auto px-16 lg:px-32">
                <div className="flex-between flex-col md:flex-row mb-8">
                    <h2 className="text-2xl font-bold">New Releases - Movies</h2>
                    <div className="flex-center text-[#D9D9D9FF] text-2xl gap-[8px] cursor-pointer">
                        <span className="capitalize">View all</span>
                        <Arrow/>
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-6 xl:grid-cols-4 lg:space-y-0 gap-y-12 lg:gap-x-36 xl:gap-x-12">
                    {data.slice(0, 4).map((movie, idx) => (
                        <MovieCard key={idx} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Releases;