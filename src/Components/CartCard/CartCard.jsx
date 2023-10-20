const CartCard = () => {
    return (
        <div>
            <div className="flex gap-8 bg-[#ebe8fc] p-5 rounded">
                <div className="w-28 h-32 bg-slate-200 rounded">
                    <img src="https://images.unsplash.com/photo-1595925889916-2a1d773a0613?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded" alt="" />
                </div>

                <div className="md:flex md:justify-between flex-1 md:py-2">
                    <div className="mb-3">
                        <p className="text-lg font-medium">
                            New 2023 BMW 7 Series
                        </p>

                        <p className="text-2xl text-[#7a63f1]">
                            $50,000
                        </p>
                    </div>

                    <div>
                        <button className="py-2 px-4 text-[#7a63f1] border border-[#7a63f1] cursor-pointer rounded font-medium">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;