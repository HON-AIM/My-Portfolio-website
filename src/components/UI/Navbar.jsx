import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 md:px-0">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <img src="/vite.svg" alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Israel Miracle &nbsp; <span className="sm:block hidden"> | Fullstack Dev</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {["About", "Work", "Contact"].map((nav) => (
            <li
              key={nav}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${nav.toLowerCase()}`}>{nav}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
