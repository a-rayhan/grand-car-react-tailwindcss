import { NavLink, useParams } from "react-router-dom";

const BrandCarsCard = ({ car }) => {

    const { _id, photo, name, rating, price } = car;

    const { id } = useParams();

    return (
        <div>
            <div className="w-full p-5 rounded-lg bg-[#ebe8fc] relative">
                <div className="w-full h-56 rounded-lg bg-slate-400 mb-5">
                    <img src={photo} alt="" className="w-full h-full rounded-lg object-cover" />
                </div>

                <div className="p-4 mb-10">
                    <p className="text-2xl font-semibold mb-2">
                        {name}
                    </p>

                    <p>
                        ratings ({rating})
                    </p>
                </div>

                <div className="flex gap-3 px-4">
                    <button className="text-[#7a63f1] border border-[#7a63f1] py-2 px-4 rounded text-lg font-medium">
                        ${price}
                    </button>

                    <NavLink to={`/details/${_id}`} className="py-2 px-4 bg-[#7a63f1] hover:bg-transparent text-[#f5f4fa] hover:text-[#7a63f1] hover:border hover:border-[#7a63f1] cursor-pointer rounded text-lg font-medium">
                        Details
                    </NavLink>
                </div>

                <div className="absolute top-2 right-2">
                    <NavLink to={`/update/${_id}`} className='bg-[#f4f4f4] py-1 px-5 rounded text-sm'>
                        Edit
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BrandCarsCard;