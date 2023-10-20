import { IoCarSportOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineCustomerService } from "react-icons/ai";

const WhyChooseUs = () => {
    return (
        <div className="bg-[#ebe8fc]" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-6 py-28">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold mb-2">
                        Why Choose Us
                    </h1>

                    <p className="text-lg">
                        Explore our first class limousine car, sedan & services
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <IoCarSportOutline className="text-6xl mb-2" />

                        <div>
                            <p className="text-xl font-semibold">
                                Variety of Car Brands
                            </p>

                            <p>
                                Discover a diverse range of car brands, from classic to modern, offering unique styles, features, and performance options for every preference.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <BsEmojiSmile className="text-6xl mb-2" />

                        <div>
                            <p className="text-xl font-semibold">
                                Best Rate Guarantee
                            </p>

                            <p>
                                Our Best Rate Guarantee ensures you'll receive the lowest price, with unbeatable value, for your peace of mind and savings.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <AiOutlineCustomerService className="text-6xl mb-2" />

                        <div>
                            <p className="text-xl font-semibold">
                                Awesome Customer Support
                            </p>

                            <p>
                                Experience exceptional customer support that's available 24/7, ready to assist you with a smile, making your satisfaction our top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;