import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'
import ButtonTitle from '../../Component/ButtonTitle';

const Error = () => {
    return (
       <div>
         <div className='flex justify-center items-center'>
            <img className='lg:w-[600px]' src={errorImg} alt="" />
            
        </div>
        <div className='text-center'>
        <Link to='/'><ButtonTitle buttonStyle='Go To Home'></ButtonTitle></Link>
        </div>
       </div>
    );
};

export default Error;