import { IoCarSportOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineCustomerService } from "react-icons/ai";

const WhyChooseUs = () => {
    return (
        <div className="bg-[#ebe8fc]">
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam doloremque at voluptatibus laboriosam doloribus!
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam doloremque at voluptatibus laboriosam doloribus!
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam doloremque at voluptatibus laboriosam doloribus!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;