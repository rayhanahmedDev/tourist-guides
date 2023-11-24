import ButtonTitle from "../../../Component/ButtonTitle";
import img1 from '../../../assets/slider1 (2).jpg'
import img2 from '../../../assets/slider2 (2).jpg'
import img3 from '../../../assets/slider3 (2).jpg'


const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full lg:h-[650px] h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                        <div className=' text-white space-y-7 lg:w-1/2'>
                            <h2 className='lg:text-5xl text-3xl font-bold'>Experience The Nature And Culture Of Bangladesh
                            </h2>
                            <p>A Team Of Experienced Tourism Professionals Will Provide You With The Best Advised And Tips</p>
                            <div className=''>
                                <ButtonTitle buttonStyle='Discover More'></ButtonTitle>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex bottom-8 right-5">
                        <a href="#slide3" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle text-white bg-gradient-to-r from-[#FF8938] to-[#F00] border-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                        <div className=' text-white space-y-7 lg:w-1/2'>
                            <h2 className='lg:text-5xl text-3xl font-bold'>Experience The Nature And Culture Of Bangladesh
                            </h2>
                            <p>A Team Of Experienced Tourism Professionals Will Provide You With The Best Advised And Tips</p>
                            <div className=''>
                                <ButtonTitle buttonStyle='Discover More'></ButtonTitle>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex bottom-8 right-5">
                        <a href="#slide1" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle  text-white bg-gradient-to-r from-[#FF8938] to-[#F00] border-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex items-center lg:pl-24 px-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                        <div className=' text-white space-y-7 lg:w-1/2'>
                            <h2 className='lg:text-5xl text-3xl font-bold'>Experience The Nature And Culture Of Bangladesh
                            </h2>
                            <p>A Team Of Experienced Tourism Professionals Will Provide You With The Best Advised And Tips</p>
                            <div className=''>
                                <ButtonTitle buttonStyle='Discover More'></ButtonTitle>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex bottom-8 right-5">
                        <a href="#slide2" className="btn btn-circle mr-5 btn-outline text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle  text-white bg-gradient-to-r from-[#FF8938] to-[#F00]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;