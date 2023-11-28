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
            {
                path : 'wishlist',
                element : <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
            },
            {
                path : 'myHome',
                element : <PrivateRoute><MyHome></MyHome></PrivateRoute>
            },
        ]
    }
]);

export default router;