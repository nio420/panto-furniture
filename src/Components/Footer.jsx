import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-4 pb-6">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* logo and details */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-2xl text-primary mb-4 cursor-pointer">
            {" "}
            Panto{" "}
          </h2>
          <p className="md:pr-12 text-gray-600 mt-5 line-clamp-3">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* services footer */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">services</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-primary">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Branding
              </Link>
            </li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">Furniture</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/shop" className="hover:text-primary">
                Beds
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                Chair
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary">
                All
              </Link>
            </li>
          </ul>
        </div>

        {/* social Link  */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">Furniture</h2>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaFacebookF /> <span> Facebook</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaTwitter /> <span> Twitter </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaInstagram /> <span> Instagram </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright  */}
      <div className="mt-12 -mb-5 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Developed by <span className="font-semibold text-primary">Omit</span>.
          All rights reserved © {new Date().getFullYear()} Panto.
        </p>
        <p className="flex gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
