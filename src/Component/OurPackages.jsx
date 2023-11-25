import { useEffect, useState } from "react";
import ButtonTitle from "./ButtonTitle";
import { FaHeart } from "react-icons/fa";
import './OurPackage.css'

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
                <div className="container hover:bg-black">
                <figure><img className="h-[230px] image w-full" src={data.img} alt="Shoes" /></figure>
                <div className="middle">
                <button><FaHeart className="text-6xl text-[#FF0904]"></FaHeart></button>
                </div>
                </div>
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