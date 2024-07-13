import movieService from "../MovieService.js";
import {CiTimer as Timer} from "react-icons/ci";
import {BiSolidStar as Star} from "react-icons/bi";
import {FaPlayCircle as Play} from "react-icons/fa";
const TrendCard = ({movie, genres}) => {


    return (
        <div
             className="overflow-hidden cursor-pointer"
        >
            <div className="h-[341px] w-[352px] trend-card relative">
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Play className="text-6xl" />
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>{movie.title || movie.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default TrendCard;