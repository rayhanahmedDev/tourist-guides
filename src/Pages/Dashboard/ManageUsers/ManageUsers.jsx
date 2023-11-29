import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUsers`);
            return res.data
        }
    })

    // change the role from tourist to admin
    const handleMakeAdmin = book => {
        axiosSecure.patch(`/booked/admin/${book._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    // change the role from tourist to host
    const handleMakeTourGuide = book => {
        axiosSecure.patch(`/book/admin/${book._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase bg-gradient-to-r from-[#FF00001A] to-[#FF89381A]">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((book, index) => <tr key={book._id}>
                                    <th>{index + 1}</th>
                                    <td>{book.name}</td>
                                    <td>{book.email}</td>

                                    <>
                                    <td>
                                    {book?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(book)} className="btn btn-sm bg-gradient-to-r from-[#FF8938] to-[#F00] text-white">Make Admin</button>}
                                </td>
                                    <td>
                                    {book?.role === 'host' ? 'Host' : <button onClick={() => handleMakeTourGuide(book)} className="btn btn-sm bg-gradient-to-r from-[#FF8938] to-[#F00] text-white">Make Tour Guide</button>}
                                </td>
                                    </>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;