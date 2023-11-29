import { useLoaderData } from "react-router-dom";
import NavBer from "../Shared/Navber/NavBer";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";

const GuideDetails = () => {

    const { name, image, contactDetails, education, skills, workExperience } = useLoaderData()
    const [rating, setRating] = useState(4);
    return (
        <div>
            <NavBer></NavBer>
            <div className="lg:w-7/12 lg:mx-auto rounded-lg mt-6 lg:flex justify-between lg:mt-16">
                <div className="lg:w-1/2 p-5">
                    <img className="lg:rounded-lg w-64 h-64" src={image} alt="" />
                    {/* rating section */}
                    <div className="mt-4" style={{ maxWidth: 180, width: '100%' }}>
                        <Rating
                            value={rating}
                            onChange={setRating}
                        />
                    </div>
                </div>
                <div className="p-5 lg:w-1/2">
                    
                    <h5 className="mb-2 text-[24px] font-medium">{name}</h5>
                    <p className="mb-3 text-[#A3A3A6] font-bold">{education}</p>
                    <div className="flex-wrap justify-between">
                        <p className="mb-3 text-[#A3A3A6]">Skills : <span className="font-bold">{skills}</span></p>
                        <p className="mb-3 text-[#A3A3A6]">WorkExperience : <span className="font-bold">{workExperience}</span></p>
                        <p className="mb-3 text-[#A3A3A6]">ContactDetails : <span className="font-bold">{contactDetails}</span></p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <textarea className="border-2 border-[#FF3811] focus:outline-[#FF3811] rounded-lg p-3" name="" placeholder="Make Your Comment..." id="" cols="40" rows="5"></textarea>
            </div>
            <div className="text-center">
            <button className="btn btn-sm bg-gradient-to-r from-[#FF8938] to-[#F00] text-white border-[#FF3811]">Submit</button>
            </div>
        </div>
    );
};

export default GuideDetails;