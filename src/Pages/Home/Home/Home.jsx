import NavBer from "../../Shared/Navber/NavBer";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div className="lg:max-w-[1400px] mx-auto">
            <NavBer></NavBer>
            </div>
            <div  className='lg:max-w-[1400px] mx-auto'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;