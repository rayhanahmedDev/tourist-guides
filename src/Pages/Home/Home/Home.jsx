import NavBer from "../../Shared/Navber/NavBer";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import TourType from "../TourType/TourType";
import Tourism from "../Tourism/Tourism";
import TouristStory from "../TouristStory/TouristStory";


const Home = () => {
    return (
        <div>
            <div className="lg:max-w-[1400px] mx-auto">
            <NavBer></NavBer>
            </div>
            <div  className='lg:max-w-[1400px] mx-auto'>
                <Banner></Banner>
                <Tourism></Tourism>
            </div>
            <div>
                <TourType></TourType>
            </div>
            <div className="lg:max-w-[1400px] mx-auto">
                <TouristStory></TouristStory>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;