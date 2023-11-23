import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOuts/Main";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Error></Error>
    },
]);

export default router;