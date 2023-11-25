import { useLoaderData } from "react-router-dom";
import AllPackage from "../../Component/AllPackage";
import NavBer from "../Shared/Navber/NavBer";


const AllPackages = () => {

    const loadData = useLoaderData()

    return (
        <div>
            <NavBer></NavBer>
            <div className='lg:max-w-[1400px] mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
                    {
                        loadData.map(dataLoad => <AllPackage key={dataLoad._id} dataLoad={dataLoad}></AllPackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPackages;