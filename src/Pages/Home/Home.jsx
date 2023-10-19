import Banner from "../../Components/Banner/Banner";
import Blog from "../../Components/Blog/Blog";
import BrandCategory from "../../Components/BrandCategory/BrandCategory";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <BrandCategory />
            <WhyChooseUs />
            <Blog />
        </div>
    );
};

export default Home;