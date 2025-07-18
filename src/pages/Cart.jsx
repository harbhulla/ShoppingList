import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [ newCart, setNewCart ] = useState([]);
  useEffect(() => {
    const merged = [];
    cartItems.forEach((item) => {
        const existing = merged.find((i) => i.id === item.id);
        if(existing) {
            existing.quantity += item.quantity;
        } else {
            merged.push({...item})
        }
    })
    setNewCart(merged);
  },[cartItems])

return (
  <div className="flex flex-col gap-8 px-6 py-12 max-w-7xl mx-auto">
    {newCart.map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center gap-6 border rounded-xl shadow-md p-6 bg-white"
      >
        <img
          className="h-32 w-32 object-contain"
          src={item.image}
          alt={item.title || `item-${index}`}
        />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>

          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <div className="text-md font-medium text-gray-700">
              Qty: {item.quantity}
            </div>
            <div className="text-md font-bold text-gray-900">
              ${item.quantity * item.price}
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md px-4 py-2 transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)};
