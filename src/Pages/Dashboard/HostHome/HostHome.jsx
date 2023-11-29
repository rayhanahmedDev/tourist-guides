import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ButtonTitle from "../../../Component/ButtonTitle";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const HostHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
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
                name: data.name,
                contactDetails: data.contactDetails                ,
                education: data.education,
                skills: data.skills,
                workExperience: data.workExperience,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/tourGuides', menuItem)
            console.log(menuRes);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Guide Adding Success",
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
            <div className='flex justify-center items-center'>
                <div className='bg-white shadow-lg rounded-2xl w-full md:w-3/5'>
                    <div className='w-full mb-4 rounded-t-lg h-48 bg-gradient-to-r from-[#FF00001A] to-[#FF89381A]'>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            Role : Host
                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form section */}
            <div className="max-w-7xl h-[70vh] mx-auto px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex my-6">
                        <div className="form-control w-full mr-6">
                            <label className="label">
                                <span className="label-text">Tour Guide Name</span>
                            </label>
                            <input type="text"
                                placeholder="Tour Guide Name"
                                {...register("name", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Details</span>
                            </label>
                            <input type="text"
                                placeholder="Contact Details"
                                {...register("contactDetails", { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex my-6">
                        {/* category */}
                        <div className="form-control w-full mr-6">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input {...register("education", { required: true })} type="text"
                                placeholder="Education"
                                className="input input-bordered w-full" />
                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Skills</span>
                            </label>
                            <input {...register("skills", { required: true })} type="text"
                                placeholder="Skills"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Work Experience</span>
                        </label>
                        <input {...register("workExperience", { required: true })} type="text"
                            placeholder="Work Experience"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="file" {...register('image', { required: true })} className="file-input mt-6 file-input-bordered w-full max-w-xs" />
                        <div className="mt-6">
                            <ButtonTitle buttonStyle='Add Guide'></ButtonTitle>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HostHome;