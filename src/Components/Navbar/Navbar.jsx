import { NavLink, useNavigate } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="shadow-lg">
            <div className="max-w-7xl mx-auto">
                <nav className="px-6 py-7 flex justify-between items-center">
                    <div>
                        <NavLink to='/' className='text-3xl font-semibold'>
                            GrandCar
                        </NavLink>
                    </div>

                    <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden order-2">

                        {
                            toggleMenu === true ? <FiGrid className="lg:hidden text-2xl cursor-pointer" /> : <FiGrid className="lg:hidden text-2xl cursor-pointer" />
                        }

                        <ul className={`absolute w-full h-[600px] top-1/3 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#ebe8fc] p-8 z-50 flex flex-col items-center pt-36 gap-y-6 text-2xl font-medium lg:hidden ${toggleMenu ? 'hidden' : ''}`}>
                            <li>
                                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/brand' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                    Brand
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/shop' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                    Shop
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/addnew' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                    Add New
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/cart' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
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
                            <NavLink to='/' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/brand' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                Brand
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/shop' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/addnew' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                Add New
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/cart' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#7a63f1]" : ""}>
                                Carts
                            </NavLink>
                        </li>
                    </ul>

                    <div className="hidden xl:block text-lg font-medium">
                        {
                            user ? <>
                                <div className="flex justify-center items-center gap-4 cursor-pointer">
                                    <div className="dropdown dropdown-end">
                                        <div className="avatar online m-1" tabIndex={0}>
                                            <div className="w-14 rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                                            <li className="py-4 px-8">{user?.displayName}</li>
                                            <li className="py-4 px-8">{user?.email}</li>
                                            <li>
                                                <NavLink onClick={handleLogOut} to='/login' className='py-4 px-8'>
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </> : <>
                                <NavLink to='/login' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#7a63f1] text-[#f5f4fa] py-2 px-4 rounded" : "py-2 px-4 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium"}>
                                    Login
                                </NavLink>
                            </>
                        }
                    </div>

                    {/* <div className="hidden lg:flex items-center gap-6">
                        <li className="list-none">
                            <NavLink to='/login' className='py-2 px-4 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium'>
                                Login
                            </NavLink>
                        </li>
                    </div> */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;