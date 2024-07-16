import movieService from "../MovieService.js";
import {CiTimer as Timer} from "react-icons/ci";
const MovieCard = ({movie, tv, className}) => {
    return(
        <div className="flex flex-col space-y-2 cursor-pointer">
            <div className={`image-container w-[full] relative ${className}`}>
                <img src={movieService.getPoster(movie.poster_path)} alt="" className="rounded-[10px]"/>
                {
                    tv ? (
                        <span className="pill absolute top-0 mx-[16px] mt-[8px]">EP3</span>
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
        </div>
    )
}

export default MovieCard;