import { useLoaderData } from "react-router-dom";
import ViewPackages from "../../Component/ViewPackages";


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
        </div>
    );
};

export default ViewDetails;