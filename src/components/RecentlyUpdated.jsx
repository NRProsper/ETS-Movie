import movieService from "../MovieService.js";
import {useEffect, useState} from "react";
import AirCard from "./AirCard.jsx";
import {FaArrowRight as Arrow} from "react-icons/fa";

const RecentlyUpdated = () => {

    const [onAir, setOnAir] = useState([])

    useEffect(() => {
        movieService.getAiring()
            .then((response) => {
                setOnAir(response.data.results)
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            });

    }, [])
    return (
        <section id="on-air">
            <div className="container mx-auto px-16">
                <div className="py-16">
                    <h2 className="text-2xl">Recently Updated</h2>
                    <div className="flex items-end justify-between">
                        <div className="air-cards mt-12 flex items-center justify-start gap-12">
                            {onAir.slice(0, 4).map(air => (
                                <AirCard key={air.id} title={air.original_name}
                                         img={movieService.getPoster(air.poster_path)}/>
                            ))}
                        </div>
                        <div
                            className="right-arrow w-[88px] h-[88px] rounded-full bg-[#D9D9D9FF] flex-center cursor-pointer">
                            <Arrow className="text-black text-4xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RecentlyUpdated;