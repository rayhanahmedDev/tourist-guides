import { useLoaderData } from "react-router-dom";
import AllStory from "../../Component/AllStory";
import NavBer from "../Shared/Navber/NavBer";


const AllStories = () => {
    const data = useLoaderData()
    return (
        <div>
            <NavBer></NavBer>
            <div className="lg:max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16">
                    {
                        data.map(stories => <AllStory key={stories._id} stories={stories}></AllStory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllStories;