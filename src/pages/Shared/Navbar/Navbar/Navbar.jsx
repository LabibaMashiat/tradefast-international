import { Link } from "react-router-dom";
import logo from "/logoOfTFI.jpg";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="navbar fixed top-0 z-50 bg-blue-950 shadow-sm py-4 px-4 flex items-center justify-between">
        {/* Logo and Branding */}
<div className="flex items-center gap-3">
  <div className="w-24">
    <img src={logo} alt="logo" className="object-cover w-full rounded" />
  </div>
  <div className="leading-tight">
    <div className="flex flex-col">
            <a
              href="/"
              className="font-semibold text-white  md:text-xl"
            >
              Trade Fast International
            </a>
           <hr />
            <h3 className="text-white text-xs ">
             <i> China Based Fabrics and Garments Accessories Supplier.</i>
            </h3>
          </div>
  </div>
</div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown dropdown-end relative">
          <label tabIndex={0} className="btn btn-neutral m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 right-0 absolute z-50 p-2 shadow bg-white text-black border border-gray-300 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/truefashionbd">True Fashion BD</Link></li>
            
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/truefashionbd">True Fashion BD</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
