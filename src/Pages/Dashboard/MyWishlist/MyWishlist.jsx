import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEye, FaTrash, } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyWishlist = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/users?email=${user.email}`)
            return res.data
        }
    })

    // delete operation
    const handleDeleteItem = (wish) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/users/${wish._id}`)
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${wish.tripTitle} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>
                                Picture
                            </th>
                            <th>TourType</th>
                            <th>price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map((wish) => <tr key={wish._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask w-16 h-16">
                                                <img src={wish.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="text-[16px]">{wish.tourType}</h2>
                                </td>
                                <td>
                                    <p className="text-[16px]">${wish.price}</p>
                                </td>
                                <th>
                                    <Link to={`/viewPackage/${wish._id}`}>
                                        <button><FaEye className="text-xl text-[#FF8938]"></FaEye></button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(wish)} className="text-xl "><FaTrash className="text-[#F00]"></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;