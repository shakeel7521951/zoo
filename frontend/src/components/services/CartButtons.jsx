import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, buyNow } from "../../redux/cartSlice";

const CartButtons = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => dispatch(addToCart(product))}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-medium shadow hover:from-emerald-600 hover:to-emerald-800 transition"
            >
                Add to Cart
            </button>

            <button
                onClick={() => dispatch(buyNow(product))}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
                Buy Now
            </button>
        </div>
    );
};

export default CartButtons;
