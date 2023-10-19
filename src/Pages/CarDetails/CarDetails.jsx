import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CarDetails = () => {

    const [car, setCar] = useState([]);

    const carData = useLoaderData();

    const { detailsId } = useParams();

    useEffect(() => {
        const findCarId = carData.find(car => car._id == detailsId);
        setCar(findCarId);
    }, [detailsId, carData]);


    return (
        <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full h-96 bg-slate-400 flex-1">
                    <img src={car.photo} alt="" className="w-full h-full rounded-lg object-cover" />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-3">
                        {car.name}
                    </h2>

                    <p className="mb-10">
                        {car.details}
                    </p>

                    <div className="flex gap-3 mb-5">
                        <button className="text-[#7a63f1] border border-[#7a63f1] py-2 px-8 rounded text-lg font-medium">
                            ${car.price}
                        </button>

                        <button to='/details' className="py-2 px-4 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                            Add to cart
                        </button>
                    </div>

                    <p>
                        <span className="font-medium">Category:</span> {car.brand}
                    </p>

                    <p>
                        <span className="font-medium">Tag:</span> Car
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;