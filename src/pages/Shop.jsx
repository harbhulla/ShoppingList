import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Shop({data}) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = (item, quantity) => {
    if (quantity > 0) {
      setCartItems((prev) => [...prev, { ...item, quantity: Number(quantity) }]);
    }
  };
  return (
    <>
      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-4 mx-auto max-w-7xl">
        {data.map((item) => {
          const [qty, setQty] = useState(1); // create quantity per item
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col h-full min-h-[320px] transition-transform hover:scale-[1.02] duration-200"
            >
              <h2 className="text-md font-semibold text-gray-800 mb-3 text-center">
                {item.title}
              </h2>

              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-full object-contain mb-4"
              />

              <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">
                  {"$" + item.price}
                </span>

                <input
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-16 px-2 py-1 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900"
                />

                <button
                  onClick={() => handleAddToCart(item, qty)}
                  className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-md px-4 py-2 cursor-pointer transition"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
