import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#f4f4f4] pt-14 pb-5" data-aos="fade-up"
        data-aos-duration="1000">
                <div className="max-w-7xl mx-auto mb-6 px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div>
                            <p className="text-xl font-semibold mb-4">
                                About Us
                            </p>

                            <p className="mb-2 text-[#434344]">
                                Getting dressed up and traveling with good friends makes for a shared, unforgettable experience.
                            </p>

                            <NavLink className='text-2xl font-semibold'>
                                GrandCar
                            </NavLink>
                        </div>

                        <div>
                            <p className="text-xl font-semibold mb-4">
                                Contact Info
                            </p>

                            <p className="text-[#434344]">
                                1-567-124-44227
                            </p>
                            <p className="text-[#434344]">
                                184 Main Street East Perl Habour 8007
                            </p>
                            <p className="text-[#434344]">
                                Mon - Sat 8.00 - 18.00 Sunday CLOSED
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-semibold mb-4">
                                Newsletter
                            </p>

                            <p className="text-[#434344]">
                                Don't miss a thing! Sign up to receive daily deals
                            </p>

                            <div className="mt-3">
                                <input type="email" name="email" placeholder="Your Email Address" className="max-w-2xl w-full text-center border-2 border-[#434344] py-4 rounded-lg placeholder:text-lg" />

                                <div className="flex justify-center items-center mt-3">
                                    <button className="text-xl bg-[#7a63f1] py-4 w-full rounded-xl text-white font-medium">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <p className="text-center mt-3 text-sm text-[#434344]">
                        2023 All rIghts reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;