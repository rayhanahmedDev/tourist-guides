import { useLoaderData } from "react-router-dom";
import TourTypeCard from "../../Component/TourTypeCard";
import NavBer from "../Shared/Navber/NavBer";


const TourTypePackage = () => {
    const data = useLoaderData()
    return (
        <div>
            <NavBer></NavBer>
            <div className="lg:max-w-[1400px] mx-auto mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        data.map(tourCard => <TourTypeCard key={tourCard._id} tourCard={tourCard}></TourTypeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourTypePackage;