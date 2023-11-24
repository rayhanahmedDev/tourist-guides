import { useEffect, useState } from "react";
import ButtonTitle from "./ButtonTitle";


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
                packages.map(data => <div key={data._id} className="card bg-base-100 shadow-xl">
                <figure><img className="h-[230px] w-full" src={data.img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.tourType}</h2>
                  <h2 className="card-title">{data.tripTitle}</h2>
                  <p>Price : ${data.price}</p>
                  <div className="card-actions justify-end">
                    <ButtonTitle buttonStyle='View Package'></ButtonTitle>
                  </div>
                </div>
              </div>)
            }
        </div>
      </div>
    );
};

export default OurPackages;