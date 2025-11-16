import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { X } from "lucide-react";
import LogoImg from "../assets/Logo.png";
import { CartContext } from "../context/CartContext";

// List of navigation items
const navList = [
  { name: "Furniture", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// NavItems component
const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-12 text-center">
      {navList.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { cartCount } = useContext(CartContext);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScroll ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-6xl container mx-auto flex items-center justify-between py-5 px-4">
        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src={LogoImg}
              alt="Logo"
              className={`w-16 h-auto object-contain transition-all duration-300 ${
                isScroll ? "logo-primary" : ""
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Cart and Mobile Toggle */}
        <div className="flex items-center gap-10">
          {/* Cart button */}
          <Link to="/cart" className="relative">
            <FaBagShopping className="text-xl" />
            <sup className="absolute top-0 -right-3 bg-primary text-white w-4 h-4 rounded-full flex justify-center items-center text-xs">
              {cartCount}
            </sup>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            onClick={toggleMenu}
            className="md:hidden text-2xl cursor-pointer hover:text-primary"
          >
            {isOpen ? null : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-8 text-2xl text-white transition-all duration-500  transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Close button inside mobile menu */}
          <div
            className="cursor-pointer hover:text-primary absolute top-4 right-5"
            onClick={toggleMenu}
          >
            <X size={32} />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
