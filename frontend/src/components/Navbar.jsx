import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className=" text-white text-2xl font-bold " style={{ fontFamily: 'cursive', textDecoration: 'none' }}>Craftopia</Link>
        <div className="hidden md:flex gap-2 items-center">
          <form onSubmit={handleSearchSubmit} className="flex items-center mr-4">
            <div className='flex items-center rounded-xl overflow-hidden gap-1 bg-slate-600'>
              <FiSearch className="h-5 w-5 ml-1" />
              <input type="text" value={searchQuery}
                onChange={handleSearchChange} placeholder='Search for products' className='p-1 w-64 border-hidden rounded-r-xl focus:outline-none bg-slate-600' />
            </div>
          </form>
          <Link to="/" className="text-gray-300 hover:text-white hover:uppercase px-3">Home</Link>
          <Link to="/cart" className="text-gray-300 hover:text-white hover:uppercase px-3">Cart</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white hover:uppercase px-3">Signup</Link>
          <Link to="/login" className="text-gray-300 hover:text-white hover:uppercase px-3">Login</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-gray-300 hover:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul>
            <li><Link to="/" className="block text-sm px-2 py-4 cursor-pointer text-white hover:bg-gray-700 hover:uppercase">Home</Link></li>
            <li><Link to="/cart" className="block text-sm px-2 py-4 cursor-pointer text-white hover:bg-gray-700 hover:uppercase transition duration-300">Cart</Link></li>
            <li><Link to="/signup" className="block text-sm px-2 py-4 cursor-pointer text-white hover:bg-gray-700 transition hover:uppercase duration-300">Signup</Link></li>
            <li><Link to="/login" className="block text-sm px-2 py-4 cursor-pointer text-white hover:bg-gray-700 hover:uppercase transition duration-300">Login</Link></li>
            <form onSubmit={handleSearchSubmit} className="flex items-center mr-4">
              <div className='flex items-center rounded-xl overflow-hidden gap-1 bg-slate-600'>
                <FiSearch className="h-5 w-5 ml-1" />
                <input type="text" value={searchQuery}
                  onChange={handleSearchChange} placeholder='Search for products' className='p-1 w-64 border-hidden rounded-r-xl focus:outline-none bg-slate-600' />
              </div>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
