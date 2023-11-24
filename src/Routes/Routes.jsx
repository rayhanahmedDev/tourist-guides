import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOuts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOuts/Dashboard";

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
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>
    }
]);

export default router;