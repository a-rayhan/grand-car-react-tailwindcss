import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-bold text-[#7a63f1] mb-2">
                        404
                    </h1>

                    <p className="text-[#7a63f1] text-3xl font-semibold mb-4">
                        Page Not Found
                    </p>

                    <p className="text-lg max-w-xl text-center mb-10">
                        The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
                    </p>

                    <NavLink to='/'>
                        <div className="flex justify-center">
                            <button className="text-xl bg-[#7a63f1] px-7 py-5 rounded-xl text-white font-medium mb-10">
                                Back to home
                            </button>
                        </div>
                    </NavLink>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPage;