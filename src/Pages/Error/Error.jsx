import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'

const Error = () => {
    return (
       <div>
         <div className='flex justify-center items-center'>
            <img className='lg:w-[600px]' src={errorImg} alt="" />
            
        </div>
        <div className='text-center'>
        <Link to='/'><button className='btn'>Go To Home</button></Link>
        </div>
       </div>
    );
};

export default Error;