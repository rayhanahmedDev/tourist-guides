import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOuts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOuts/Dashboard";
import AllPackages from "../Pages/AllPackages/AllPackages";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import TourTypePackage from "../Pages/TourTypePackage/TourTypePackage";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import AllStories from "../Pages/AllStories/AllStories";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import MyHome from "../Pages/Dashboard/MyHome/MyHome";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import Payment from "../Pages/Dashboard/Payment/Payment";
import HostAssigned from "../Pages/Dashboard/HostAssigned/HostAssigned";
import HostRoute from "../Provider/HostRoute";
import HostHome from "../Pages/Dashboard/HostHome/HostHome";
import AdminRoute from "../Provider/AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import GuideDetailTwo from "../Pages/GuideDetailTwo/GuideDetailTwo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Error></Error>,
        children : [
            {
                path:'/',
                element : <Home></Home>
            },
            {
                path:'login',
                element : <Login></Login>
            },
            {
                path:'signup',
                element : <SignUp></SignUp>
            },
            {
                path : 'allpackage',
                element:<AllPackages></AllPackages>,
                loader : () => fetch('http://localhost:5000/packages')
            },
            {
                path : 'details/:id',
                element : <PrivateRoute><GuideDetails></GuideDetails></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/guides/${params.id}`)
            },
            {
                path : '/viewPackage/:id/details/:id',
                element : <PrivateRoute><GuideDetailTwo></GuideDetailTwo></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/guides/${params.id}`)
            },
            {
                path: 'tourPackages/:tourType',
                element : <TourTypePackage></TourTypePackage>,
                loader : ({params}) => fetch(`http://localhost:5000/tourTypes/${params.tourType}`)
            },
            {
                path: 'viewPackage/:id',
                element : <ViewDetails></ViewDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/tourType/${params.id}`)
            },
            {
                path : 'storyDetails/:id',
                element : <PrivateRoute><StoryDetails></StoryDetails></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/touristStory/${params.id}`)
            },
            {
                path : 'allStories',
                element : <AllStories></AllStories>,
                loader : () => fetch('http://localhost:5000/touristStory')
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children : [

            // user dashboard
            {
                path : 'wishlist',
                element : <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
            },
            {
                path : 'myHome',
                element : <PrivateRoute><MyHome></MyHome></PrivateRoute>
            },
            {
                path : 'bookings',
                element : <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path : 'payment',
                element  : <Payment></Payment>
            },

            // host dashboard
            {
                path : 'assigned',
                element : <HostRoute><HostAssigned></HostAssigned></HostRoute>
            },
            {
                path: 'myProfile',
                element :<HostRoute><HostHome></HostHome></HostRoute>
            },

            // admin panel
            {
                path : 'adminHome',
                element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addPackage',
                element : <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
                path : 'manageUsers',
                element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
]);

export default router;