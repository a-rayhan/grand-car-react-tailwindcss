import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="bg-black max-w-3xl mx-auto p-10 md:p-20 rounded-3xl">
                <div>
                    <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-3">
                        Password Protection
                    </h2>

                    <p className="text-lg text-white text-center mb-8">
                        This page is protected. If you are the website admin, please <NavLink to='/login' className='underline text-[#7a63f1]'>Login</NavLink> your account. Or new here this page, please register below.
                    </p>
                </div>

                <div>
                    <form action="">
                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Name <span className="text-[#ff566a]">*</span>
                                </label>

                                <input type="text" name="name" placeholder="Enter your name" className="max-w-2xl bg-[#7a63f1] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>
                        </div>

                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Photo Url <span className="text-[#ff566a]">*</span>
                                </label>

                                <input type="text" name='img' placeholder="Enter your photo url" className="max-w-2xl bg-[#7a63f1] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>
                        </div>

                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Email <span className="text-[#ff566a]">*</span>
                                </label>

                                <input type="email" name="email" placeholder="Enter your email" className="max-w-2xl bg-[#7a63f1] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>

                            {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {emailError}
                            </p> */}
                        </div>

                        <div className="md:w-[500px] mx-auto">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Password <span className="text-[#ff566a]">*</span>
                                </label>

                                <input type="password" name="password" placeholder="Enter your password" className="max-w-2xl bg-[#7a63f1] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>

                            {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {error}
                            </p> */}
                        </div>

                        <div className="flex justify-center items-center mt-7">
                            <button className="text-xl bg-[#7a63f1] py-4 w-[500px] rounded-xl text-white font-medium">
                                Register
                            </button>
                        </div>
                    </form>

                    <div>
                        <p className="text-white text-center mt-6">
                            Have already an account? <NavLink to='/login' className='underline text-[#7a63f1]'>Login</NavLink>
                        </p>
                    </div>

                    <div className="md:w-[500px] bg-transparent border-2 border-[#7a63f1] hover:bg-[#7a63f1] rounded-xl flex justify-center items-center gap-x-4 mt-10 mx-auto">
                        <div className="bg-white p-1 rounded-full">
                            <FcGoogle className="text-2xl" />
                        </div>
                        <button className="text-xl py-5 text-white font-medium">
                            Register with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;