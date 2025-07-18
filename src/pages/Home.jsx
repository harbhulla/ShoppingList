import myImage from "../images/indianguy.png";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-12">
      
      {/* TEXT */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5e3023]">
        Style Bazaar
        </h1>
        <p className="text-[#b08968] text-xl font-semibold mt-3 font-body">
        Where fashion meets your vibe
        </p>
        <button
          onClick={() => navigate("/Shop")}
          className="mt-6 px-6 py-2 bg-[#7f5539] text-[#fffaf0] rounded-full hover:bg-[#9c6644] transition cursor-pointer"
        >
          Shop
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-[500px] shrink-0">
        <img
          src={myImage}
          alt="Indian dude"
          className="w-full h-auto object-cover rounded-lg shadow-xl shadow-black/30"
        />
      </div>
    </div>
  );
}
