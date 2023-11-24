import NavBer from "../../Shared/Navber/NavBer";
import Banner from "../Banner/Banner";
import Tourism from "../Tourism/Tourism";


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
        </div>
    );
};

export default Home;