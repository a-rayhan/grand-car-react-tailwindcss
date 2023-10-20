const CartCard = ({ cartItem, handleDeleteItem }) => {

    const { _id, photo, name, price } = cartItem;

    return (
        <div>
            <div className="flex gap-8 bg-[#ebe8fc] p-5 rounded">
                <div className="w-28 h-32 bg-slate-200 rounded">
                    <img src={photo} className="w-full h-full object-cover rounded" alt="" />
                </div>

                <div className="md:flex md:justify-between flex-1 md:py-2">
                    <div className="mb-3">
                        <p className="text-lg font-medium">
                            {name}
                        </p>

                        <p className="text-2xl text-[#7a63f1]">
                            ${price}
                        </p>
                    </div>

                    <div>
                        <button onClick={() => handleDeleteItem(_id)} className="py-2 px-4 text-[#7a63f1] border border-[#7a63f1] cursor-pointer rounded font-medium">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;