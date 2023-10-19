import { NavLink } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    return (
        <div className="shadow-lg">
            <div className="max-w-7xl mx-auto">
                <nav className="px-6 py-7 flex justify-between items-center">
                    <div>
                        <NavLink to='/' className='text-2xl font-semibold'>
                            GrandCar
                        </NavLink>
                    </div>

                    <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden order-2">

                        {
                            toggleMenu === true ? <FiGrid className="lg:hidden text-2xl cursor-pointer" /> : <FiGrid className="lg:hidden text-2xl cursor-pointer" />
                        }

                        <ul className={`absolute w-full h-[600px] top-1/3 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#ebe8fc] p-8 z-50 flex flex-col items-center pt-36 gap-y-6 text-2xl font-medium lg:hidden ${toggleMenu ? 'hidden' : ''}`}>
                            <li>
                                <NavLink to='/'>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/shop'>
                                    Shop
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/brand'>
                                    Brand
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/addnew'>
                                    Add New
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/cart'>
                                    Carts
                                </NavLink>
                            </li>

                            <div className="mt-5">
                                <li className="list-none">
                                    <NavLink to='/login' className='py-2 px-8 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-2xl font-medium'>
                                        Login
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <ul className="hidden lg:flex justify-between items-center gap-8 text-lg font-medium">
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/shop'>
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/brand'>
                                Brand
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/addnew'>
                                Add New
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/cart'>
                                Carts
                            </NavLink>
                        </li>
                    </ul>

                    <div className="hidden lg:flex items-center gap-6">
                        <li className="list-none">
                            <NavLink to='/login' className='py-2 px-4 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium'>
                                Login
                            </NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;