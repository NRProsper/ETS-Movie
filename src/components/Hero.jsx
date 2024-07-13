import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from "swiper/modules"
import {BiCalendar as Calendar, BiSolidStar as Star} from "react-icons/bi";
import {FaPlayCircle as Play, FaClock} from "react-icons/fa";
import {CiTimer as Timer} from "react-icons/ci";
import movieService from "../MovieService.js";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Button from "./Button.jsx";


const Hero = () => {
    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        movieService.getNowPlaying()
            .then((response) => {
                setNowPlaying(response.data.results)
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])


    return (
        <div className="movie-slider">
            <Swiper
                className="h-[850px] my-slider"
                modules={[EffectFade, Pagination]}
                loop={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                effect="fade"
            >
                {nowPlaying.slice(0,5).map(movie => (
                    <SwiperSlide
                        className=""
                        key={movie.id}
                        style={{
                            backgroundImage: `url(${movieService.getPoster(movie.backdrop_path)})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="movie-content p-16 container mx-auto h-full flex flex-col justify-center items-start space-y-24">
                            <div className="play-btns w-full flex items-center justify-center gap-[44px] ">
                                <Button type="primary">
                                    <span>Watch now</span>
                                    <Play/>
                                </Button>
                                <Button type="outline">
                                    <span>Watch later</span>
                                    <FaClock />
                                </Button>
                            </div>
                            <div className="movie-details text-left">
                                <h1 className="font-black text-4xl">{movie.title}</h1>
                                <div className="genres-vote flex gap-[24px]">
                                    <div className="genres"></div>
                                    <div className="year flex-center gap-[8px]">
                                        <Calendar/>
                                        <span>{new Date(movie.release_date).getFullYear()}</span>
                                    </div>
                                    <div className="play-time flex-center gap-[8px]">
                                        <Timer />
                                        <span>3:12:00</span>
                                    </div>
                                    <div className="voting flex-center gap-[8px]">
                                        <Star/>
                                        <span>{movie.vote_average}</span>
                                    </div>
                                </div>
                                <p className="w-[800px]">{movie.overview}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default Hero;