import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ButtonTitle from "./ButtonTitle";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const BookedNow = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        // image upload imgbb
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                email: data.email,
                category: data.category,
                price: parseFloat(data.price),
                date: data.date,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/booking', menuItem)
            console.log(menuRes);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('image url', res.data);
    }

    return (
        <div>
            <div className="max-w-7xl h-[70vh] mx-auto px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex my-6">
                    <div className="form-control w-full mr-6">
                        <label className="label">
                            <span className="label-text">Tourist Name</span>
                        </label>
                        <input type="text"
                            placeholder="Tourist Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tourist Email</span>
                        </label>
                        <input type="email"
                            placeholder="Tourist Email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    </div>
                    <div className="flex my-6">
                        {/* category */}
                        <div className="form-control w-full mr-6">
                            <label className="label">
                                <span className="label-text">Tour guide name</span>
                            </label>
                            <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value='default'>Tour guide name</option>
                                <option value="Beach Hopping Tour">Beach Hopping Tour</option>
                                <option value="Hill Tracts Adventure">Hill Tracts Adventure</option>
                                <option value="Historic Mosque Trail">Historic Mosque Trail</option>
                                <option value="Tea Garden Exploration">Tea Garden Exploration</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number"
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input {...register("date", { required: true })} type="date"
                                placeholder="Date"
                                className="input input-bordered w-full" />
                        </div>
                   <div className="flex justify-center items-center">
                   <input type="file" {...register('image', { required: true })} className="file-input mt-6 file-input-bordered w-full max-w-xs" />
                    <div className="mt-6">
                    <ButtonTitle buttonStyle='Book Now'></ButtonTitle>
                    </div>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default BookedNow;