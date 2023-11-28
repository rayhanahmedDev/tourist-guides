import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ButtonTitle from "./ButtonTitle";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const BookedNow = ({tourType}) => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useAuth()

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
                name: data.name,
                email: data.email,
                guideName: data.guideName,
                price: parseFloat(data.price),
                date: data.date,
                image: res.data.data.display_url,
                tourType:tourType
            }
            const menuRes = await axiosSecure.post('/booking', menuItem)
            console.log(menuRes);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Confirm your Booking",
                    text: "You clicked the button!",
                    icon: "success",
                    footer: `<a href="/dashboard/bookings">Go To My Bookings</a>`
                  });
            }
        }
        console.log('image url', res.data);
        }else{
            Swal.fire({
                title: "Please Login",
                text: "At first login then add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{ state:{from:location}})
                }
              });
        }
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
                            <select defaultValue='default' {...register("guideName", { required: true })} className="select select-bordered w-full">
                                <option disabled value='default'>Tour guide name</option>
                                <option value="Mizanur Rahman">Mizanur Rahman</option>
                                <option value="Sara Rahman">Sara Rahman</option>
                                <option value="Ayesha Khan">Ayesha Khan</option>
                                <option value="Rahim Ahmed">Rahim Ahmed</option>
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