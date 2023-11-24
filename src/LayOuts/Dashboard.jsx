import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-12">
                <div className="lg:col-span-3 p-4 bg-[#D1A054] flex flex-col item-center h-full">
                    <ul className="menu uppercase">
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><FaAd></FaAd> Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><FaList></FaList> Payment History</NavLink>
                            </li>
                        </>

                        {/* shared links */}
                        <div className="divider divider-horizontal">--</div>
                        <li>
                            <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'><FaSearch></FaSearch>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'><FaEnvelope></FaEnvelope> Contact</NavLink>
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