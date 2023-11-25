import { useLoaderData } from "react-router-dom";
import NavBer from "../Shared/Navber/NavBer";


const GuideDetails = () => {

    const { name, img, contactDetails, education, skills, workExperience} = useLoaderData()
    return (
        <div>
            <NavBer></NavBer>
            <div className="lg:w-9/12 lg:mx-auto rounded-lg  lg:flex justify-between lg:mt-16 shadow">
                    <div className="lg:w-1/2">
                        <img className="lg:rounded-lg w-64 h-64" src={img} alt="" />
                    </div>
                    <div className="p-5 lg:w-1/2">
                        <h5 className="mb-2 text-[24px] font-medium">{name}</h5>
                        <p className="mb-3 text-[#A3A3A6]">{education}</p>
                        <div className="flex-wrap justify-between">
                            <p className="mb-3 text-[#A3A3A6]">Skills : ${skills}</p>
                            <p className="mb-3 text-[#A3A3A6]">WorkExperience : {workExperience}</p>
                            <p className="mb-3 text-[#A3A3A6]">ContactDetails : {contactDetails}</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default GuideDetails;