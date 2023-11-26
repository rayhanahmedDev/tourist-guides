import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm, } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {

    const { googleLogin, createUser } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Sign up Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/login')
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Sign Up Successful",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-white border text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>
                            Sign up to access your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        noValidate=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    {...register("name", { required: true })}
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    {...register("password", { required: true })}
                                    type='password'
                                    name='password'
                                    autoComplete='current-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='btn w-full bg-gradient-to-r from-[#FF8938] to-[#F00] border-[#FF3811] rounded-md py-3 text-white'
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div onClick={handleGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don&apos;t have an account yet?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;