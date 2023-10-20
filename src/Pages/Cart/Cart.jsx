import { useContext, useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import { AuthContext } from "../../Hooks/AuthProvider";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
    const [cartItemsData, setCartItemsData] = useState(cartItems)

    const { user } = useContext(AuthContext);

    const cartData = useLoaderData();

    useEffect(() => {
        const cartItemsFilter = cartData.filter(car => user.email == car.email);
        setCartItems(cartItemsFilter);
    }, [user, cartData]);

    const handleDeleteItem = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cartdata/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingItems = cartItems.filter(cartItem => cartItem._id !== id);
                            setCartItemsData(remainingItems)
                        }
                    })
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="flex flex-col gap-6">
                {
                    cartItems.map(cartItem => <CartCard key={cartItem._id} cartItem={cartItem} handleDeleteItem={handleDeleteItem} />)
                }

                {
                    cartItems.length === 0 && (
                        <div className="pb-28">
                            <p className="text-[#7a63f1] text-3xl font-semibold mb-4 text-center">
                                There is no product here.
                            </p>
                            <NavLink to='/brand'>
                                <div className="flex justify-center">
                                    <button className="text-lg bg-[#7a63f1] px-8 py-4 rounded-xl text-white font-medium">
                                        Buy Now
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;