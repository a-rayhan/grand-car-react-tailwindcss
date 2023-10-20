import CartCard from "../../Components/CartCard/CartCard";

const Cart = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="flex flex-col gap-6">
                <CartCard />
                <CartCard />
            </div>
        </div>
    );
};

export default Cart;