import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemInCart } from "./redux/cart/cartSlice";

function CartItems({ item }) {
  const dispatch = useDispatch();

  const deleteItem = (itemId) => {
    dispatch(deleteItemInCart(itemId));
  };

  return (
    <div className="flex flex-col sm:flex-row items-top mb-4 rounded-lg bg-white p-4 shadow-lg transition-shadow duration-200 hover:shadow-xl">
      <img
        src={item.img}
        alt="product-image"
        className="object-cover rounded-md w-full sm:w-32 h-full mb-4 sm:mb-0"
      />
      <div className="flex flex-col sm:items-start sm:flex-row justify-between w-full sm:ml-4">
        <div className="sm:mr-4 flex-1">
          <h1 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h1>
          <p className="text-gray-500 text-sm sm:text-base">{item.subtext}</p>
        </div>

        <div className="flex items-top justify-between gap-8">
          <div className="price text-sm font-semibold flex items-center space-x-1 sm:space-x-0">
            <p className="font-semibold text-xl">{item.price}</p>
            <p className="text-gray-500">сом</p>
          </div>
          <button
            onClick={() => deleteItem(item.id)}
            className="mt-2 sm:mt-0 text-gray-400 hover:text-red-500 transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
