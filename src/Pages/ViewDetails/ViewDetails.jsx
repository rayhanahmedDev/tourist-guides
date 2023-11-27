import { useLoaderData } from "react-router-dom";
import ViewPackages from "../../Component/ViewPackages";
import TourPlan from "../../Component/TourPlan";


const ViewDetails = () => {
    const viewData = useLoaderData()

    return (
        <div className="max-w-[1400px] mx-auto mt-16">
            <div className="md:mx-72">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        viewData.map(view => <ViewPackages key={view._id} view={view}></ViewPackages>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center my-12">About The Tour Section</h2>
                <p className="text-center">Embark on a journey through time with our Historic Mosque Trail. Explore the architectural wonders of Bangladesh historic mosques, each narrating tales of cultural richness and medieval grandeur. Uncover the intricate details, marvel at the timeless beauty, and immerse yourself in the spiritual and historical significance of these UNESCO Heritage Sites.</p>
            </div>
            <div >
                <h2 className="text-4xl font-bold text-center my-12">Tour Plan</h2>
                <TourPlan></TourPlan>
            </div>
        </div>
    );
};

export default ViewDetails;