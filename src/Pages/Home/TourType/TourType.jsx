import { useEffect, useState } from "react";
import TourTypes from "../../../Component/TourTypes";

const TourType = () => {
    const [tourData, setTourData] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTourData(data))
    },[])
    return (
        <div className="lg:h-[60vh] max-w-[1400px] md:px-56 mx-auto my-16 bg-gradient-to-r from-[#FF00001A] to-[#FF89381A] pb-12">
            <div>
               <h2 className="text-4xl font-bold text-center pt-16">Tour Type</h2>
               <p className="text-center mt-3">Find What Package You Want</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ml-8 lg:ml-0">
                {
                    tourData.map(tour => <TourTypes key={tour.id} tour={tour}></TourTypes>)
                }
            </div>
        </div>
    );
};

export default TourType;