import { useForm } from "react-hook-form";
import ButtonTitle from "../../../Component/ButtonTitle";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPackage = () => {

    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        if(user && user.email){
            // image upload imgbb
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                tourType: data.tourType,
                tripTitle: data.tripTitle                ,
                price: data.price,
                des: data.des,
                tourPlan: data.tourPlan,
                image: res.data.data.display_url,
                image2: res.data.data.display_url,
                image3: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/package', menuItem)
            console.log(menuRes);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Package Adding Success",
                    text: "You clicked the button!",
                    icon: "success",
                  });
            }
        }
        console.log('image url', res.data);
        }
    }
    return (
        <div>
            {/* form section */}
            <div className="max-w-7xl h-[70vh] mx-auto px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex my-6">
                        <div className="form-control w-full mr-6">
                            <label className="label">
                                <span className="label-text">Tour Type</span>
                            </label>
                            <input type="text"
                                placeholder="Tour Type"
                                {...register("tourType", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Trip Title</span>
                            </label>
                            <input type="text"
                                placeholder="tripTitle"
                                {...register("tripTitle", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex my-6">
                        {/* category */}
                        <div className="form-control w-full mr-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="text"
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input {...register("des", { required: true })} type="text"
                                placeholder="Description"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tour Plan</span>
                        </label>
                        <input {...register("tourPlan", { required: true })} type="text"
                            placeholder="Tour Plan"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="md:flex justify-center items-center">
                        <input type="file" {...register('image', { required: true })} className="file-input mt-6 file-input-bordered w-full max-w-xs" />
                        <input type="file" {...register('image2', { required: true })} className="file-input mt-6 file-input-bordered w-full max-w-xs" />
                        <input type="file" {...register('image3', { required: true })} className="file-input mt-6 file-input-bordered w-full max-w-xs" />
                        <div className="mt-6">
                            <ButtonTitle buttonStyle='Add Guide'></ButtonTitle>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;