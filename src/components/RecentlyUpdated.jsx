import AirCard from "./AirCard.jsx";
import {FaArrowRight as Arrow} from "react-icons/fa";

const RecentlyUpdated = ({data}) => {

    return (
        <section id="on-air">
            <div className="container mx-auto px-32">
                <div className="py-16">
                    <h2 className="text-2xl">Recently Updated</h2>
                    <div className="flex items-end justify-between">
                        <div className="air-cards mt-12 flex items-center justify-start gap-20">
                            {data.slice(0, 4).map(air => (
                                <AirCard key={air.id} movie={air}/>
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