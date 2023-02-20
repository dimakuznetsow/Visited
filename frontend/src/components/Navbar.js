import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    logout();
  };

  return (
    <header className="sticky top-0 bg-sky-500 dark:bg-slate-800 dark:bg-slate-800 p-4 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {user && (
            <Link className="text-xl text-white font-medium" to="/">
              {pathname === "/" ? <h1>Visited countries</h1> : null}
            </Link>
          )}
          {user && (
            <Link
              className="text-xl text-white font-medium"
              to="/check-for-visa"
            >
              {pathname === "/check-for-visa" ? (
                <h1>Visa requirements</h1>
              ) : null}
            </Link>
          )}
          {!user && (
            <Link
              className="text-xl text-white font-medium ml-2"
              to="/check-for-visa"
            >
              <h1>Visa requirements</h1>
            </Link>
          )}
        </div>
        <nav className="flex items-center ml-auto">
          <button onClick={toggleDarkMode} className="mr-4 hidden md:block">
            {isDarkMode ? (
              <FaSun className="text-white" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
          {user && (
            <>
              <div className="flex items-center hidden md:block">
                <Link
                  className="text-xl text-white font-medium"
                  to="/check-for-visa"
                >
                  {pathname === "/" ? <h1>Visa requirements</h1> : null}
                </Link>
                <Link className="text-xl text-white font-medium" to="/">
                  {pathname === "/check-for-visa" ? (
                    <h1>Visited countries</h1>
                  ) : null}
                </Link>
              </div>
              <div className="hidden md:block flex items-center ml-6  px-2 py-1 text-sky-600 dark:text-slate-800 bg-white rounded-md">
                <button onClick={handleClick}>Log out</button>
              </div>
            </>
          )}

          {!user && (
            <div className="hidden md:block">
              {" "}
              <Link
                className="px-2 py-1 mx-2 text-white hover:bg-sky-600 dark:hover:bg-slate-600 rounded-md"
                to="/login"
              >
                Log in
              </Link>
              <Link
                className="px-2 py-1 mx-2 text-white hover:bg-sky-600 dark:hover:bg-slate-600 rounded-md"
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          )}
        </nav>
        <button className="md:hidden">
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
