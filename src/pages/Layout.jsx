import { Outlet, Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // or /24/outline
import React from "react";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col font-inter bg-white text-gray-800">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between bg-white border-b border-gray-200 h-16 px-6 shadow-sm">
        <h1 className="text-2xl font-medium text-neutral-700">Bazaar</h1>

        <div className="flex gap-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Shop
          </Link>
        
        </div>
        <Link
            to="/cart"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
              <button className="flex items-center gap-2 px-4 py-2 rounded hover:text-blue-600 transition-colors duration-300 transition cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

    </button>
          </Link>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1  p-6  ">
        <Outlet />
      </main>
      
    </div>
  );
}
