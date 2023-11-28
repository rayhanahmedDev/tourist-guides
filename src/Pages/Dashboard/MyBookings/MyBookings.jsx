import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyBookings = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/bookings?email=${user.email}`)
            return res.data
        }
    })

    // total price
    const totalPrice = bookings.reduce((previousValue, total) => previousValue + total.price, 0)

    const handleDeleteBooking = (id) => {
        axiosSecure.delete(`/bookings/${id}`)
        .then(res => {
            refetch()
            console.log(res.data);
        })
    }

    return (
        <div>
            <div>
                <div className="uppercase flex justify-evenly mb-6 w-full">
                    <h2 className="text-4xl font-medium">Total Package : {bookings.length}</h2>
                    <h2 className="text-4xl font-medium">Total Price : ${totalPrice}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase bg-gradient-to-r from-[#FF00001A] to-[#FF89381A]">
                                <th>
                                    package name
                                </th>
                                <th>tour guide name</th>
                                <th>tour date</th>
                                <th>tour price</th>
                                <th>status</th>
                                <th>action</th>
                                <th>action</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((book) => <tr key={book._id}>
                                    <td>
                                        <h2 className="text-[16px]">{book.tourType}</h2>
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
                                        <p className="text-[16px]">{book.status}</p>
                                    </td>
                                    <td>
                                        {book.status === 'in Review' && (
                                            <button className="btn btn-sm" onClick={() => handleDeleteBooking(book._id)}>Cancel</button>
                                        )}
                                    </td>
                                    <td>
                                        {book.status === 'Accepted' ? <Link to='/dashboard/payment'>
                                            <button className="btn btn-sm bg-[#D1A054] text-white">Pay</button>
                                        </Link> : <button disabled className="btn bg-[#D1A054] text-white btn-sm">Pay</button>}
                                    </td>
                                    <td>
                                    <button className="btn btn-sm" disabled>Apply</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;