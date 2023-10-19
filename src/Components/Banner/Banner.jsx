import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-slate-700">
            <div className="w-full h-[50vh] lg:h-[70vh] relative">
                <img src="https://images.unsplash.com/photo-1601641467525-5782e1d4a3d2?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />

                <div className="absolute bg-black top-0 left-0 w-full h-full opacity-60"></div>

                <div className="max-w-7xl mx-auto md:px-6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
                    <p className="text-sm lg:text-xl mb-1 text-[#7a63f1]">
                        Find your perfect car today
                    </p>

                    <p className="text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold leading-tight shadow-xl mb-5 lg:mb-9 xl:mb-14 text-white">
                        Highlightling a lagacy of class-defining
                    </p>

                    <NavLink to='/shop' className='py-2 lg:py-3 xl:py-4 px-4 xl:px-8 bg-[#7a63f1] hover:bg-transparent text-[#f5f4fa] hover:text-white hover:border hover:border-white cursor-pointer rounded text-xs md:text-sm xl:text-lg font-medium'>
                        Discover more
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;