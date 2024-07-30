import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules"
import {BiCalendar as Calendar, BiSolidStar as Star} from "react-icons/bi";
import {FaClock, FaPlayCircle as Play} from "react-icons/fa";
import {CiTimer as Timer} from "react-icons/ci";
import movieService from "../MovieService.js";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Button from "./Button.jsx";
import {Link} from "react-router-dom";


const Hero = ({data, genres}) => {
    const getGenreNames = (genreIds) => {
        return genreIds.map(id => genres[id]);
    };

    return (
        <section id="hero">
            <div className="movie-slider">
                <Swiper
                    className="h-[850px] my-slider"
                    modules={[EffectFade, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    effect="fade"
                >
                    {data.slice(0, 5).map(movie => (
                        <SwiperSlide
                            className=""
                            key={movie.id}
                            style={{
                                backgroundImage: `url(${movieService.getPoster(movie.backdrop_path)})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div
                                className="movie-content lg:px-32 container mx-auto h-full flex flex-col justify-center items-start space-y-16">
                                <div className="flex-col sm:flex-row play-btns w-full flex  items-center justify-center gap-[44px]  ">
                                    <Link to={`watch-movie/${movie.id}`} className="btn btn-primary">
                                        <span>Watch now</span>
                                        <Play/>
                                    </Link>
                                    <Button type="outline">
                                        <span>Watch later</span>
                                        <FaClock/>
                                    </Button>
                                </div>
                                <div className="movie-details text-center md:text-left  px-[16px] md:px-0">
                                    <h1 className="font-black text-4xl  mb-[24px]">{movie.title}</h1>
                                    <div className="genres-vote md:flex-row md:flex gap-[24px] mb-[24px] flex-col space-y-2.5 md:space-y-0">
                                        <div className="genres flex items-center gap-[8px] justify-center md:justify-start">
                                            {
                                                getGenreNames(movie.genre_ids).map((g, idx) => {
                                                    return (
                                                        <span key={idx}
                                                              className="bg-white text-black p-[10px] rounded-[20px]">{g}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="right flex items-center justify-center md:justify-start gap-[8px]">
                                            <div className="year flex-center gap-[8px]">
                                                <Calendar/>
                                                <span>{new Date(movie.release_date).getFullYear()}</span>
                                            </div>
                                            <div className="play-time flex-center gap-[8px]">
                                                <Timer/>
                                                <span>3:12:00</span>
                                            </div>
                                            <div className="voting flex-center gap-[8px]">
                                                <Star/>
                                                <span>{movie.vote_average}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="w-auto md:w-[800px]">{movie.overview}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}


export default Hero;