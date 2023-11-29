import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaCar, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    return (
        <div>
            {/* admin dashboard */}
            <div className="">
            <h2 className="text-4xl"> <span className="mr-2">Hi, Welcome</span>
                {user?.displayName ? user?.displayName : 'Back'}
            </h2>
            <div className="stats shadow my-8 flex">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-3xl"></FaBook>
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value">{stats.menuItems}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCar className="text-3xl"></FaCar>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>

            </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-white shadow-lg rounded-2xl w-full md:w-3/5'>
                    <div className='w-full mb-4 rounded-t-lg h-48 bg-gradient-to-r from-[#FF00001A] to-[#FF89381A]'>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            Role : Admin
                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AdminHome;