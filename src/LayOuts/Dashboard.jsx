import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaList, } from "react-icons/fa";
import useHost from "../Hooks/useHost";

const Dashboard = () => {
    const [isHost] = useHost()
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-12">
                <div className="lg:col-span-3 p-4 bg-gradient-to-r from-[#FF00001A] to-[#FF89381A] flex flex-col item-center h-full">
                    <ul className="menu">
                        {
                          isHost ?  <>
                                <li>
                                    <NavLink to='/dashboard/myProfile'><FaHome></FaHome> My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/assigned'><FaBook></FaBook>My Assigned Tours</NavLink>
                                </li>
                            </> :
                        <>
                            <li>
                                <NavLink to='/dashboard/myHome'><FaHome></FaHome> My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'><FaBook></FaBook>My Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/wishlist'><FaList></FaList>My Wishlist</NavLink>
                            </li>
                        </>
                        }

                        {/* shared links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-9 h-full p-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;