import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  text-black">
      <div className="flex items-center">
        <span className="mx-12 text-xl">Unicraft</span>
      </div>
      <div className="flex justify-center flex-1">
        <a href="#" className="hover:text-gray-700 mx-6">How it Works</a>
        <a href="#" className="hover:text-gray-700 mx-6">Pricing </a>
        <a href="#" className="hover:text-gray-700 mx-6">FAQ</a>
      </div>
      <div>
      <button className="text-gray-800 py-2 px-4 rounded-xl border mx-12 my-3 border-gray-800 hover:bg-gray-200">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
