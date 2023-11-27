import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const MyHome = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleShareStory = e => {
        e.preventDefault()
        const description = e.target.description.value;
        const stories = {
            description
        }
        axiosPublic.post('/shareStory', stories)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        title: "Story added Successfully",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center md:h-[80vh]'>
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
                            User Id: {user.uid}
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
                    {/* form section */}
                    <div className="">
                        <form onSubmit={handleShareStory}>
                            <div className="text-center px-4">
                                <textarea className="border-2 border-[#FF3811] focus:outline-[#FF3811] pl-3 rounded-lg" name="description" placeholder="Share Your Story..." id="" cols="40" rows="5"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-sm my-4 bg-gradient-to-r from-[#FF8938] to-[#F00] text-white border-[#FF3811]">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHome;