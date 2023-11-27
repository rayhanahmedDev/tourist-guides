import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './NavBer.css'
import ButtonTitle from "../../../Component/ButtonTitle";

const NavBer = () => {

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
        <li><NavLink className='mr-4' to='/community'>Community</NavLink></li>
        <li><NavLink className='mr-4' to='/blogs'>Blogs</NavLink></li>
        <li><NavLink className='mr-4' to='/about'>About Us</NavLink></li>
        <li><NavLink className='mr-4' to='/content'>Content</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#FFFFFF] shadow md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="h-24" src="https://i.ibb.co/smt42VN/logo2.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <h2 className="my-2 flex justify-center bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">{user?.displayName}</h2>
                                </li>
                                <li>
                                    <h2 className="my-2 text-center bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">{user.email}</h2>
                                </li>
                                    <Link to='/dashboard'>
                                        <button className="btn btn-sm mb-2 bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white w-full">Dashboard</button>
                                    </Link>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white w-full">Logout</button>
                                </li>
                            </ul>
                        </div>
                        :
                        <Link to='/login'><ButtonTitle buttonStyle="Login"></ButtonTitle></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBer;