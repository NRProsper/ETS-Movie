import {Link} from "react-router-dom";
import movieService from "../MovieService.js";

const AirCard = ({movie}) => {
    return(
        <Link to={`/watch-series/${movie.id}`} className="flex-center gap-[24px] hover:opacity-60 transition-opacity">
            <img
                src={movieService.getPoster(movie.poster_path)}
                alt={movie.original_name}
                style={{
                    width: "64px",
                    height: "103px",
                    borderRadius: "5px"
                }}
            />
            <div className="right">
                <span className="block">{movie.original_name}</span>
                <span className="block">Series/S 2/EP 9</span>
                <span className="block">11/05/23</span>
            </div>
        </Link>
    )
}

export default AirCard;