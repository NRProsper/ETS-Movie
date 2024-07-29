import movieService from "../MovieService.js";
import {CiTimer as Timer} from "react-icons/ci";
import {BiSolidStar as Star} from "react-icons/bi";
import {FaPlayCircle as Play} from "react-icons/fa";
import {Link} from "react-router-dom";

const TrendCard = ({movie, genres}) => {


    return (
        <Link to={`watch-movie/${movie.id}`}
             className="overflow-hidden"
        >
            <div className="h-[200px] lg:h-[341px] lg:w-full trend-card relative cursor-pointer">
                <img
                    src={movieService.getPoster(movie.poster_path)}
                    alt={movie.title||movie.name}

                    className="rounded-[10px] w-full h-full object-cover relative"
                />
                <div className="overlay-top absolute top-0 flex-between w-full px-[16px] pt-[8px] z-10">
                    <div className="play-time flex-center gap-[8px]">
                        <Timer/>
                        <span>3:12:00</span>
                    </div>
                    <div className="voting flex-center gap-[8px]">
                        <Star/>
                        <span>{movie.vote_average}</span>
                    </div>
                </div>
                <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
                    <Play className="text-6xl" />
                </div>
            </div>
            <div className="bottom mt-2 flex flex-col items-center justify-between">
                <div>
                    <h2 className="font-medium truncate text-truncate text-[18px]">{movie.title || movie.name}</h2>
                </div>
                <div className="genres flex flex-col md:flex-row md:flex-center gap-[16px]">
                    {
                        genres.slice(0,2).map((genre, idx) => (
                            <span className="pill w-[200px] text-center md:w-auto" key={idx}>{genre}</span>
                        ))
                    }
                    {/*<span className="pill">Action</span>*/}
                    {/*<span className="pill">Fantacy</span>*/}
                </div>
            </div>
        </Link>
    )
}

export default TrendCard;