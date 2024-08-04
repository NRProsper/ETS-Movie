import { BiCalendar as Calendar, BiSolidStar as Star } from "react-icons/bi";
import { CiTimer as Timer } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import movieService from "../MovieService.js";

export default function WatchSeries() {
    const { tvData } = useLoaderData();
    const { tvId } = useParams();
    const [videos, setVideos] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieService.getSeriesVideo(tvId)
            .then((response) => {
                setVideos(response.results);
                setCurrentVideo(response.results[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [tvId]);

    return (
        <section id="watch-series" className="mt-24">
            <div className="container mx-auto px-16 lg:px-32">
                <div className="large-video mb-8">
                    {loading ? (
                        <div className="skeleton-loader" style={{ width: '100%', height: '712px' }}></div> // Skeleton for the video iframe
                    ) : (
                        currentVideo && (
                            <iframe
                                src={`https://www.youtube.com/embed/${currentVideo.key}`}
                                title={currentVideo.name}
                                width="100%"
                                height="712px"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )
                    )}
                </div>

                <div id="series-details" className="mt-20 flex items-start justify-between gap-[32px]">
                    <div className="img w-[352px] h-[576px]">
                        {loading ? (
                            <div className="skeleton-loader" style={{ width: '100%', height: '100%' }}></div> // Skeleton for poster
                        ) : (
                            <img className="rounded-[10px]" src={movieService.getPoster(tvData.poster_path)} alt="" />
                        )}
                    </div>
                    <div className="details flex-1">
                        <div className="title-container flex justify-between items-center mb-8">
                            {loading ? (
                                <div className="skeleton-loader" style={{ width: '200px', height: '34px' }}></div> // Skeleton for title
                            ) : (
                                <h2 className="text-[34px] font-bold">{tvData.original_name}</h2>
                            )}
                            {loading ? (
                                <div className="skeleton-loader" style={{ width: '150px', height: '36px' }}></div> // Skeleton for button
                            ) : (
                                <button className="pill">Add to favourites</button>
                            )}
                        </div>
                        <div className="genres-vote md:flex-row md:flex gap-[24px] mb-[24px] flex-col space-y-2.5 md:space-y-0">
                            <div className="genres flex items-center gap-[8px] justify-center md:justify-start">
                                {loading ? (
                                    <div className="skeleton-loader" style={{ width: '80px', height: '24px' }}></div> // Skeleton for genres
                                ) : (
                                    tvData.genres.map((genre, idx) => (
                                        <span key={idx} className="bg-white text-black p-[10px] rounded-[20px]">
                                            {genre.name}
                                        </span>
                                    ))
                                )}
                            </div>
                            <div className="right flex items-center justify-center md:justify-start gap-[8px]">
                                {loading ? (
                                    <>
                                        <div className="skeleton-loader" style={{ width: '60px', height: '24px' }}></div> {/* Skeleton for year */}
                                        <div className="skeleton-loader" style={{ width: '60px', height: '24px' }}></div> {/* Skeleton for play time */}
                                        <div className="skeleton-loader" style={{ width: '60px', height: '24px' }}></div> {/* Skeleton for voting */}
                                    </>
                                ) : (
                                    <>
                                        <div className="year flex-center gap-[8px]">
                                            <Calendar />
                                            <span>{new Date(tvData.first_air_date).getFullYear()}</span>
                                        </div>
                                        <div className="play-time flex-center gap-[8px]">
                                            <Timer />
                                            <span>3:12:00</span>
                                        </div>
                                        <div className="voting flex-center gap-[8px]">
                                            <Star />
                                            <span>{tvData.vote_average}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="mb-6">
                            {loading ? (
                                <div className="skeleton-loader" style={{ width: '100%', height: '20px' }}></div> // Skeleton for overview text
                            ) : (
                                <p>{tvData.overview}</p>
                            )}
                        </div>
                        <div className="more-details flex flex-col space-y-1.5">
                            {loading ? (
                                <>
                                    <div className="skeleton-loader" style={{ width: '200px', height: '20px' }}></div> {/* Skeleton for country */}
                                    <div className="skeleton-loader" style={{ width: '200px', height: '20px' }}></div> {/* Skeleton for genre */}
                                    <div className="skeleton-loader" style={{ width: '200px', height: '20px' }}></div> {/* Skeleton for date release */}
                                    <div className="skeleton-loader" style={{ width: '200px', height: '20px' }}></div> {/* Skeleton for productions */}
                                </>
                            ) : (
                                <>
                                    <p>Country: {tvData.production_countries[0].name}</p>
                                    <p>Genre: {tvData.genres.map(genre => genre.name).join(", ")}</p>
                                    <p>Date release: {tvData.release_date}</p>
                                    <p>Productions: {tvData.production_companies.map(prod => prod.name).join(", ")}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">Available Seasons</h2>
                    <div className="mt-3 grid grid-cols-4 gap-4">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className="skeleton-loader" style={{ width: '100%', height: '100px' }}></div> // Skeleton for seasons
                            ))
                        ) : (
                            tvData.seasons.map((season, idx) => (
                                <Link to={""} key={idx} className="px-3 py-2 bg-zinc-900/50 rounded-md">
                                    <h4 className="font-bold text-[24px]">{season.name}</h4>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
