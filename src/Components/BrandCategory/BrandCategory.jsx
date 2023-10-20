import { NavLink, useLoaderData, useParams } from 'react-router-dom'
import Audi from '../../assets/img/audi.png'
import BMW from '../../assets/img/bmw.png'
import Lexus from '../../assets/img/lexus.png'
import Mercedes from '../../assets/img/mercedes.png'
import Mini from '../../assets/img/mini.png'
import Porsche from '../../assets/img/porsche.png'

const BrandCategory = () => {

    const carData = useLoaderData();

    const { brandName } = useParams();


    return (
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up"
        data-aos-duration="1000">
            <div className="py-28">
                <div>
                    <h1 className="text-3xl font-semibold mb-2">
                        Explore Top Brands
                    </h1>

                    <p className="text-lg max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio reprehenderit deleniti accusantium suscipit officia voluptas neque pariatur, et voluptates!
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8 mt-16'>
                    <NavLink to='/brand/audi' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={Audi} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                                Audi
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/brand/bmw' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={BMW} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                                BMW
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/brand/lexus' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={Lexus} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                            Lexus
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/brand/mercedes' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={Mercedes} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                            Mercedes
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/brand/mini' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={Mini} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                            Mini
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/brand/porsche' className='flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 cursor-pointer hover:bg-[#f4f4f4] rounded p-2'>
                        <div className='bg-[#f4f4f4] p-2 h-20 flex justify-center items-center'>
                            <img src={Porsche} alt="" className='w-16' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <h3 className='text-xl font-semibold'>
                            Porsche
                            </h3>

                            <p>
                                from $40k
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;