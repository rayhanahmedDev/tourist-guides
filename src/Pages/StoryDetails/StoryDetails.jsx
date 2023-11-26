import { useLoaderData } from "react-router-dom";
import NavBer from "../Shared/Navber/NavBer";
import {
    FacebookShareButton,
    FacebookIcon,
} from "react-share";

const StoryDetails = () => {
    const storyData = useLoaderData()
    const shareUrl = 'https://www.facebook.com'
    return (
        <div>
            <NavBer></NavBer>
            <div className="max-w-7xl mx-auto mt-16">
                <h3 className="text-4xl mb-12">{storyData.title}</h3>
                <img className='lg:max-w-2xl' src={storyData.image} alt="" />
                <p className='my-8 lg:max-w-2xl text-[#676767]'>{storyData.description}</p>
                <span className="flex gap-3">
                    <p>Share on</p>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon className="rounded-full mb-8" size={40}></FacebookIcon>
                </FacebookShareButton>
                </span>
            </div>
        </div>
    );
};

export default StoryDetails;