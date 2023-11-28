import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useHost from "../Hooks/useHost";


const HostRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isHost, isHostLoading] = useHost()
    const location = useLocation()

    if(loading || isHostLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isHost){
        return children;
    }else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default HostRoute;