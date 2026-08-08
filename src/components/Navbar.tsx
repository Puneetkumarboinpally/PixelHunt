import React from "react";

const Navbar = () => {
  return (
    <div className="border-b ">
      <div className="flex justify-between items-center h-16 px-4 bg-gray-600">
        <h1 className="text-2xl font-bold ">PixelHunt</h1>
        <div className="flex gap-2 items-center">
          <input type="text" className="border rounded " />
          <button>🔍</button>
        </div>
        <div>
          <div>☀️</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
