const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
        data-aos-duration="1000">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold mb-2">
                    Articles & Tips
                </h1>

                <p className="text-lg px-2">
                    Explore some of the best tips from around the world
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="w-full p-5 rounded-lg bg-[#ebe8fc]">
                    <div className="w-full h-56 rounded-lg bg-slate-400 mb-5">
                        <img src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>

                    <div className="p-4 mb-5">
                        <p className="mb-2">
                            JANUARY 12, 2017
                        </p>

                        <p className="text-2xl font-semibold mb-2">
                            What To Do if Your Rental Car Has Met With An Accident
                        </p>
                    </div>

                    <div className="px-4">
                        <button className="py-2 px-4 bg-[#7a63f1] hover:bg-transparent text-[#f5f4fa] hover:text-[#7a63f1] hover:border hover:border-[#7a63f1] cursor-pointer rounded text-lg font-medium">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="w-full p-5 rounded-lg bg-[#ebe8fc]">
                    <div className="w-full h-56 rounded-lg bg-slate-400 mb-5">
                        <img src='https://images.unsplash.com/photo-1519994007676-baabab4bf574?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>

                    <div className="p-4 mb-5">
                        <p className="mb-2">
                            JANUARY 10, 2017
                        </p>

                        <p className="text-2xl font-semibold mb-2">
                            On The Trail of Six Best Foods in North American Cities
                        </p>
                    </div>

                    <div className="px-4">
                        <button className="py-2 px-4 bg-[#7a63f1] hover:bg-transparent text-[#f5f4fa] hover:text-[#7a63f1] hover:border hover:border-[#7a63f1] cursor-pointer rounded text-lg font-medium">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="w-full p-5 rounded-lg bg-[#ebe8fc]">
                    <div className="w-full h-56 rounded-lg bg-slate-400 mb-5">
                        <img src='https://images.unsplash.com/photo-1578041262130-633307b3bfd6?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>

                    <div className="p-4 mb-5">
                        <p className="mb-2">
                            JANUARY 9, 2017
                        </p>

                        <p className="text-2xl font-semibold mb-2">
                            Car Rental Mistakes That Can Cost Your Big Amount Money
                        </p>
                    </div>

                    <div className="px-4">
                        <button className="py-2 px-4 bg-[#7a63f1] hover:bg-transparent text-[#f5f4fa] hover:text-[#7a63f1] hover:border hover:border-[#7a63f1] cursor-pointer rounded text-lg font-medium">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;