import Logic from "./Logic";

import { useAuth } from "../../contexts/AuthContext";
import { useLocation } from "react-router";

import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeaderNavBar({ fixed }) {
  const { navBarShow, setNavBarShow, animationNavBar } = Logic();
  const location = useLocation();
  const { currentUser, logOut } = useAuth();

  const handleRoute = () => {
    if (location.pathname !== "/") {
      return (
        <Link
          to="/"
          className="text-white font-bold animated_item border-gray-800"
        >
          Home
        </Link>
      );
    }
    return (
      <Link
        className="text-white font-bold animated_item border-gray-800"
        to="/dashboard"
      >
        Dashboard
      </Link>
    );
  };

  return (
    <div>
      <motion.div
        className="bg-indigo-600 h-16 m-2 rounded-xl flex justify-around shadow-item-custom"
        animate={animationNavBar}
        initial={{
          width: "4rem",
        }}
      >
        {navBarShow ? (
          <ul className="flex items-center justify-around w-full">
            <li>{handleRoute()}</li>
            <li>
              {currentUser ? (
                <button
                  className="text-white font-bold animated_item border-gray-800"
                  onClick={logOut}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="text-white font-bold animated_item border-gray-800"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              <a
                href="#test"
                className="text-white font-bold animated_item border-gray-800"
              >
                Profile
              </a>
            </li>
          </ul>
        ) : (
          ""
        )}
        <div
          onClick={() => setNavBarShow(!navBarShow)}
          className="w-16 h-16 flex items-center justify-center rounded-full"
        >
          <IconContext.Provider
            value={{ className: "cursor-pointer text-white" }}
          >
            <FaChevronRight />
          </IconContext.Provider>
        </div>
      </motion.div>
    </div>
  );
}

export default HeaderNavBar;
