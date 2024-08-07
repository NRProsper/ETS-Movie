import movieService from "../MovieService.js";
import {CiTimer as Timer} from "react-icons/ci";
import {Link} from "react-router-dom";
import {useState} from "react";
const MovieCard = ({movie, tv, className}) => {
    const [isLoading, setIsLoading] = useState(true)
    return(
        <Link to={!tv?`/watch-movie/${movie.id}`:`/watch-series/${movie.id}`} className="flex flex-col space-y-2 cursor-pointer hover:opacity-60 transition-opacity">
            <div className={`image-container w-[full] relative ${className}`}>
                {isLoading && (
                    <div className="skeleton-loader bg-gray-300 rounded-[10px]"></div>
                )}
                <img
                    src={movieService.getPoster(movie.poster_path)}
                    alt="Movie card"
                    className={`rounded-[10px] ${isLoading ? 'hidden' : 'block'}`}
                    onLoad={() => setIsLoading(false)}
                />
                {
                    tv ? (
                        !isLoading && <span className="pill absolute top-0 mx-[16px] mt-[8px]">EP3</span>
                    ) : ""
                }
            </div>
            <div className="bottom flex-between w-[full]">
                <h2 className="w-[100px] truncate">{movie.title || movie.name}</h2>
                <div className="right flex-between gap-2">
                    {
                        tv ? <span className="pill">CAM</span> : <span className="pill">HD</span>
                    }
                    {
                        tv ? <span className="p-2 rounded-[10px] border border-[red]">Season 1</span> : <span className="flex-center gap-2">
                            <Timer />
                            3:12:00
                        </span>
                    }
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;