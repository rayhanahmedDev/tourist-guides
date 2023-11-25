import { useEffect, useState } from "react";
import OurPackCard from "./OurPackCard";

const OurPackages = () => {

    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return (
      <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {
                packages.map(data => <OurPackCard key={data._id} data={data}></OurPackCard>)
            }
        </div>
      </div>
    );
};

export default OurPackages;