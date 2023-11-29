import { useLoaderData } from "react-router-dom";
import TourPlan from "../../Component/TourPlan";
// import ViewPackage from "../../Component/ViewPackage";
import TourGuide from "../Home/Tourism/TourGuide";
import BookedNow from "../../Component/BookedNow";


const ViewDetails = () => {
    const { image, image2, image3, image4, tourType, des, tourPlan } = useLoaderData()
    return (
        <div className="max-w-[1400px] mx-auto mt-16">
            <div className="md:mx-72 grid grid-cols-1 md:grid-cols-2">
                {/* {
                    viewData.map(view => <ViewPackage key={view._id} view={view}></ViewPackage>)
                } */}
                <img className="w-[400px] h-[300px] pb-3" src={image} alt="" />
                <img className="w-[400px] h-[300px] pb-3" src={image2} alt="" />
                <img className="w-[400px] h-[300px] pb-3" src={image3} alt="" />
                <img className="w-[400px] h-[300px] pb-3" src={image4} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center my-12">About The Tour Section</h2>
                <p className="text-center">{des}</p>
            </div>
            <div >
                <h2 className="text-4xl font-bold text-center my-12">Tour Plan</h2>
                <TourPlan tourPlan={tourPlan}
                des={des}
                >
                </TourPlan>
                <TourGuide></TourGuide>
                <BookedNow tourType={tourType}></BookedNow>
            </div>
        </div>
    );
};

export default ViewDetails;