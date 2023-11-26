import { FaHeart } from "react-icons/fa";
import ButtonTitle from "./ButtonTitle";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../Hooks/useAuth";


const TourTypeCard = ({tourCard}) => {
    const {img, tourType, tripTitle, price} = tourCard;
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
            <div className="card mx-8 lg:mx-0 bg-base-100 shadow-xl">
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
                    <ButtonTitle buttonStyle='View Package'></ButtonTitle>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default TourTypeCard;