import { useEffect, useState } from "react";
import OurPackCard from "./OurPackCard";
import ButtonTitle from "./ButtonTitle";
import { Link } from "react-router-dom";

const OurPackages = () => {

    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return (
      <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                packages.map(data => <OurPackCard key={data._id} data={data}></OurPackCard>)
            }
        </div>
        <div className="text-center mt-8">
          <Link to='/allpackage'><ButtonTitle buttonStyle='All Packages'></ButtonTitle></Link>
        </div>
      </div>
    );
};

export default OurPackages;