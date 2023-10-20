import { NavLink, useNavigate } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

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
                    <div className="flex items-center cursor-pointer">
                        <AiOutlineGoogle className="text-4xl" />
                        <NavLink to='/' className='text-3xl font-bold'>
                            Car
                        </NavLink>
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

                    <div className="flex items-center gap-x-3">
                        <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden order-2">

                            {
                                toggleMenu === true ? <FiGrid className="lg:hidden text-3xl cursor-pointer" /> : <FiGrid className="lg:hidden text-3xl cursor-pointer" />
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

                        <div className="flex items-center gap-x-6 text-lg font-medium">
                            <div>
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>
                            {
                                user ? <>
                                    <div className="flex justify-center items-center gap-x-4 cursor-pointer">
                                        <div className="dropdown dropdown-end">
                                            <div className="avatar online m-2" tabIndex={0}>
                                                <div className="w-11 rounded-full">
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
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;