import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const HostAssigned = () => {

    const axiosSecure = useAxiosSecure()
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/booking`)
            return res.data
        }
    })

    // status accepted
    const handleAccepted = book => {
        axiosSecure.patch(`/booking/host/${book._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status Update Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    // status accepted
    const handleRejected = book => {
        axiosSecure.patch(`/bookings/host/${book._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status Update Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase bg-gradient-to-r from-[#FF00001A] to-[#FF89381A]">
                                <th>
                                    package name
                                </th>
                                <th>tourist name</th>
                                <th>tour date</th>
                                <th>tour price</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((book) => <tr key={book._id}>
                                    <td>
                                        <h2 className="text-[16px]">{book.name}</h2>
                                    </td>
                                    <td>
                                        <h2 className="text-[16px]">{book.guideName}</h2>
                                    </td>
                                    <td>
                                        <p className="text-[16px]">{book.date}</p>
                                    </td>
                                    <td>
                                        <p className="text-[16px]">${book.price}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => handleAccepted(book)} className="btn btn-sm bg-gradient-to-r from-[#FF8938] to-[#F00] text-white">Accept</button>
                                    </td>
                                    <td>
                                    <button onClick={() => handleRejected(book)} className="btn btn-sm bg-gradient-to-r from-[#FF8938] to-[#F00] text-white">Reject</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default HostAssigned;