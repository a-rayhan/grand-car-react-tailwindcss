import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandCarsCard from "../../Components/BrandCarsCard/BrandCarsCard";

const BrandCars = () => {
    const [cars, setCars] = useState([]);
    const [carsPhoto, setCarsPhoto] = useState([]);
    console.log(carsPhoto);
    console.log(cars);

    const carData = useLoaderData();

    const { brandName } = useParams();

    useEffect(() => {
        const findCarName = carData.filter(car => car.brand == brandName);
        setCars(findCarName);
    }, [brandName, carData]);

    useEffect(() => {
        const findCarsPhoto = cars.map(car => car.photo);
        setCarsPhoto(findCarsPhoto);
    }, [cars])

    return (
        <div className="" data-aos="fade-up"
        data-aos-duration="1000">

            {
                cars.length && <>
                    <div className="carousel w-full mt-5 shadow-lg">
                        <div id="slide1" className="carousel-item relative w-full h-72 md:h-96">
                            <img src={carsPhoto[1]} className="w-full h-full object-cover relative" />
                            <div className="absolute top-0 left-0 opacity-50 w-full h-full bg-black"></div>
                            <div className="absolute top-2/4 md:top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
                                <p className="uppercase py-4 px-8 text-[#f5f4fa] cursor-pointer rounded text-3xl md:text-5xl font-bold">
                                    {brandName} Collections
                                </p>
                                <p className="text-[#f5f4fa] text-sm md:text-md lg:text-2xl text-center">
                                    Explore Your Favourite Collections!
                                </p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide2" className="carousel-item relative w-full h-72 md:h-96">
                            <img src={carsPhoto[2]} className="w-full h-full object-cover relative" />
                            <div className="absolute top-0 left-0 opacity-50 w-full h-full bg-black"></div>
                            <div className="absolute top-2/4 md:top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
                                <p className="uppercase py-4 px-8 text-[#f5f4fa] cursor-pointer rounded text-3xl md:text-5xl font-bold">
                                    {brandName} Collections
                                </p>
                                <p className="text-[#f5f4fa] text-sm md:text-md lg:text-2xl text-center">
                                    Explore Your Favourite Collections!
                                </p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide3" className="carousel-item relative w-full h-72 md:h-96">
                            <img src={carsPhoto[3]} className="w-full h-full object-cover relative" />
                            <div className="absolute top-0 left-0 opacity-50 w-full h-full bg-black"></div>
                            <div className="absolute top-2/4 md:top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
                                <p className="uppercase py-4 px-8 text-[#f5f4fa] cursor-pointer rounded text-3xl md:text-5xl font-bold">
                                    {brandName} Collections
                                </p>
                                <p className="text-[#f5f4fa] text-sm md:text-md lg:text-2xl text-center">
                                    Explore Your Favourite Collections!
                                </p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div></>
            }

            <div className="max-w-7xl mx-auto px-6">
                <p className="text-lg mb-5 px-3 pt-14">
                    Showing all {cars.length} results for ({brandName})
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14 pb-28">
                    {
                        cars.map(car => <BrandCarsCard key={car._id} car={car} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandCars;