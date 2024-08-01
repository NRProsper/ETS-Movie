import movieService from "../MovieService.js";
import {BiCalendar as Calendar, BiSolidStar as Star} from "react-icons/bi";
import {CiTimer as Timer} from "react-icons/ci";
import {Link, useLoaderData, useParams} from "react-router-dom";
import {useEffect, useState} from "react";



export default function WatchSeries() {
    const {tvData} = useLoaderData()
    const {tvId} = useParams()
    const [videos, setVideos] = useState(null)
    const [currentVideo, setCurrentVideo] = useState(null)

    console.log(tvData)

    useEffect(() => {
        movieService.getSeriesVideo(tvId)
            .then((response) => {
                setVideos(response.results)
                setCurrentVideo(response.results[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [tvData]);

    return (
        <section id="watch-movie" className="mt-24">
            <div className="container mx-auto px-16 lg:px-32">
                <div className="large-video mb-8">
                    {currentVideo && (
                        <iframe
                            src={`https://www.youtube.com/embed/${currentVideo.key}`}
                            title={currentVideo.name}
                            width="100%"
                            height="712px"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                <div id="movie-details" className="mt-20 flex items-start justify-between gap-[32px]">
                    <div className="img w-[352px] h-[576px]">
                        <img className="rounded-[10px]" src={movieService.getPoster(tvData.poster_path)} alt=""/>
                    </div>
                    <div className="details flex-1">
                        <div className="title-container flex justify-between items-center mb-8">
                            <h2 className="text-[34px] font-bold">{tvData.original_name}</h2>
                            <button className="pill">Add to favourites</button>
                        </div>
                        <div
                            className="genres-vote md:flex-row md:flex gap-[24px] mb-[24px] flex-col space-y-2.5 md:space-y-0">
                            <div className="genres flex items-center gap-[8px] justify-center md:justify-start">
                                {
                                    tvData.genres.map((genre, idx) => (
                                        <span key={idx}
                                              className="bg-white text-black p-[10px] rounded-[20px]">{genre.name}</span>
                                    ))
                                }
                            </div>
                            <div className="right flex items-center justify-center md:justify-start gap-[8px]">
                                <div className="year flex-center gap-[8px]">
                                    <Calendar/>
                                    <span>{new Date(tvData.first_air_date).getFullYear()}</span>
                                </div>
                                <div className="play-time flex-center gap-[8px]">
                                    <Timer/>
                                    <span>3:12:00</span>
                                </div>
                                <div className="voting flex-center gap-[8px]">
                                    <Star/>
                                    <span>{tvData.vote_average}</span>
                                </div>
                            </div>
                        </div>
                        <p className="mb-6">{tvData.overview}</p>
                        <div className="more-details flex flex-col space-y-1.5">
                            <p>Country: {tvData.production_countries[0].name}</p>
                            <p>Genre: {
                                tvData.genres.map(genre => (
                                    genre.name
                                )).join(", ")
                            }</p>
                            <p>Date release: {tvData.release_date}</p>
                            <p>Productions: {
                                tvData.production_companies.map(prod => (
                                    prod.name
                                )).join(", ")
                            }</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">Available Seasons</h2>
                    <div className="mt-3 grid grid-cols-4 gap-4">
                        {
                            tvData.seasons.map((season, idx) => (
                                <Link to={""}
                                    key={idx}
                                    className="px-3 py-2 bg-zinc-900/50  rounded-md"
                                >
                                    <h4 className="font-bold text-[24px]">{season.name}</h4>
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}