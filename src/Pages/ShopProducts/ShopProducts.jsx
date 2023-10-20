import { useLoaderData } from "react-router-dom";
import CarCard from "../../Components/CarCard/CarCard";

const ShopProducts = () => {

    const carData = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
        data-aos-duration="800">

            <p className="text-lg mb-5 px-3">
                Showing all {carData.length} results
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    carData.map(car => <CarCard key={car._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default ShopProducts;