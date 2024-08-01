import { IoClose as Close } from "react-icons/io5";
import movieService from "../MovieService.js";
import {Link} from "react-router-dom";

const SearchResults = ({ results, onClose }) => {
    if (!results || results.length === 0) {
        return (
            <div className="fixed container mx-auto top-[80px] left-0 right-0 bg-black bg-opacity-70 py-6 px-8 backdrop-blur-md border-b-2 border-r-2 border-l-2 rounded-b-[12px] border-[red] shadow-xl drop-shadow-2xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h5 className="opacity-70">Search results</h5>
                    <button
                        onClick={onClose}
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <Close size={35} />
                    </button>
                </div>
                <div className="py-4 text-center">No results found</div>
            </div>
        );
    }

    return (
        <div className="fixed container mx-auto top-[80px] left-0 right-0 bg-black bg-opacity-70 py-6 px-12 backdrop-blur-md border-b-2 border-r-2 border-l-2 rounded-b-[12px] border-[red] shadow-xl drop-shadow-2xl z-50 max-h-[600px] overflow-y-auto">
            <div className="flex items-center justify-between">
                <h5 className="opacity-70">Search results</h5>
                <button
                    onClick={onClose}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                >
                    <Close size={35} />
                </button>
            </div>
            <div className="py-4">
                {results.map((result) => (
                    <Link to={result.media_type === "movie" ? `/watch-movie/${result.id}`: `/watch-series/${result.id}`} key={result.id} className="flex items-center gap-4 py-2">
                        <img
                            src={movieService.getPoster(result.poster_path)}
                            alt={result.title || result.name}
                            className="w-16 h-24 object-cover rounded-md"
                        />
                        <div>
                            <h6 className="font-semibold">{result.title || result.name}</h6>
                            <p className="text-sm text-gray-400">{result.release_date || result.first_air_date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
