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
        <div className="lg:h-[50vh] max-w-4xl mx-auto my-16">
            <div>
               <h2 className="text-4xl font-bold text-center">Tour Type</h2>
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