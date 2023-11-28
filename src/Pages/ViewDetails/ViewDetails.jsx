import { useLoaderData } from "react-router-dom";
import TourPlan from "../../Component/TourPlan";
// import ViewPackage from "../../Component/ViewPackage";
import TourGuide from "../Home/Tourism/TourGuide";
import BookedNow from "../../Component/BookedNow";


const ViewDetails = () => {
    const {img,tourType} = useLoaderData()
    return (
        <div className="max-w-[1400px] mx-auto mt-16">
            <div className="md:mx-72 grid grid-cols-1 md:grid-cols-2">
                {/* {
                    viewData.map(view => <ViewPackage key={view._id} view={view}></ViewPackage>)
                } */}
                 <div>
                <img className="w-[400px] h-[300px] pb-3" src={img} alt="" />
            </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center my-12">About The Tour Section</h2>
                <p className="text-center">Embark on a journey through time with our Historic Mosque Trail. Explore the architectural wonders of Bangladesh historic mosques, each narrating tales of cultural richness and medieval grandeur. Uncover the intricate details, marvel at the timeless beauty, and immerse yourself in the spiritual and historical significance of these UNESCO Heritage Sites.</p>
            </div>
            <div >
                <h2 className="text-4xl font-bold text-center my-12">Tour Plan</h2>
                <TourPlan></TourPlan>
                <TourGuide></TourGuide>
                <BookedNow tourType={tourType}></BookedNow>
            </div>
        </div>
    );
};

export default ViewDetails;