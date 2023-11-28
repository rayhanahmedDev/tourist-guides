import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ButtonTitle from "../../../Component/ButtonTitle";


const MyBookings = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/bookings?email=${user.email}`)
            return res.data
        }
    })
    const totalPrice = bookings.reduce((previousValue, total) => previousValue + total.price, 0)

    return (
        <div>
            <div>
                <div className="uppercase flex justify-evenly mb-6">
                <h2 className="text-4xl font-medium">Total Package : {bookings.length}</h2>
                <h2 className="text-4xl font-medium">Total Price : ${totalPrice}</h2>
                <ButtonTitle buttonStyle='Pay'></ButtonTitle>
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
                                <th>
                                    
                                </th>
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