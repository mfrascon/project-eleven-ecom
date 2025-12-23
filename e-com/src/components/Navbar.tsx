import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#F0F0E4] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="grid grid-cols-3 items-center px-32 py-4">
        {/* Left: Search */}
        <div className="flex items-center justify-start">
          <button
            aria-label="Search"
            className="text-slate-800 hover:text-slate-600 transition"
          >
            <FiSearch size={22} />
          </button>
        </div>

        {/* Center: Logo + Links */}
        <div className="flex flex-col items-center gap-6">
            <img
              src={logo}
              alt="Project Eleven Logo"
              className="h-12 w-auto object-contain"
            />

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="py-1 px-3 text-lg font-light text-black hover:text-[#F0F0E4] rounded-2xl hover:bg-slate-700 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="py-1 px-3 text-lg font-light text-black hover:text-[#F0F0E4] rounded-2xl hover:bg-slate-700 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/services"
              className="py-1 px-3 text-lg font-light text-black hover:text-[#F0F0E4] rounded-2xl hover:bg-slate-700 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="py-1 px-3 text-lg font-light text-black hover:text-[#F0F0E4] rounded-2xl hover:bg-slate-700 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Login + Cart */}
        <div className="flex items-center justify-end gap-4">
          <Link
            to="/login"
            aria-label="Login"
            className="text-slate-800 hover:text-slate-600 transition"
          >
            <FiUser size={22} />
          </Link>

          <Link
            to="/checkout"
            aria-label="Checkout"
            className="text-slate-800 hover:text-slate-600 transition"
          >
            <FiShoppingCart size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
