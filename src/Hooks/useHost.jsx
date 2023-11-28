import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHost = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isHost, isPending: isHostLoading } = useQuery({
        queryKey: [user?.email, 'isHost'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/signUpUsers/host/${user.email}`);
            console.log(res.data);
            return res.data?.host
        }
    })
    return [isHost, isHostLoading]
};

export default useHost;