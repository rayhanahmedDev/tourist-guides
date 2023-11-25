import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ButtonTitle from "../../../Component/ButtonTitle";

const TourGuide = () => {
    const { data: guides = [] } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/guides')
            return res.data
        }
    })

    return (
        <div className="my-12 max-w-6xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>
                                Profile Picture
                            </th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            guides.map((guide) => <tr key={guide._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask w-24 h-24">
                                                <img src={guide.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="text-[16px]">{guide.name}</h2>
                                </td>
                                <th>
                                    <ButtonTitle buttonStyle='Details'></ButtonTitle>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourGuide;