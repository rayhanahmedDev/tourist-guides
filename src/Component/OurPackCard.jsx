import { FaHeart } from "react-icons/fa";
import ButtonTitle from "./ButtonTitle";
import './OurPackage.css'
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const OurPackCard = ({data}) => {
    const {img, tourType, tripTitle, price } = data;
    const {user} = useAuth()

    const handlePackage = () => {
        if(user && user.email){
            const packageItem = {
                email : user.email,
                img,
                tourType,
                tripTitle,
                price
            }
            axios.post('http://localhost:5000/users', packageItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${tripTitle} to added your wishlist`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl cursor-pointer">
                <div className="container hover:bg-black">
                <figure><img className="h-[230px] image w-full" src={img} alt="Shoes" /></figure>
                <div className="middle">
                <button onClick={handlePackage}><FaHeart className="text-6xl text-[#FF0904]"></FaHeart></button>
                </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{tourType}</h2>
                  <h2 className="card-title">{tripTitle}</h2>
                  <p>Price : ${price}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/viewPackage/${tourType}`}><ButtonTitle buttonStyle='View Package'></ButtonTitle></Link>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default OurPackCard;