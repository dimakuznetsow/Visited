import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext, useState } from "react";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleLogout = () => {
    logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 bg-sky-500 dark:bg-slate-800 dark:bg-slate-800 p-4 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {user && (
              <Link className="text-xl text-white font-medium ml-2" to="/visas">
                <h1>Visited</h1>
              </Link>
            )}
            {!user && (
              <Link
                className="text-xl text-white font-medium ml-2"
                to="/visas"
                onClick={() => localStorage.setItem("visited", true)}
              >
                <h1>Visited</h1>
              </Link>
            )}
          </div>
          <nav className="flex items-center ml-auto">
            <button onClick={toggleDarkMode} className="mr-4">
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
                    to="/countries"
                  >
                    {pathname === "/visas" ? <h1>My countries</h1> : null}
                  </Link>
                </div>
                <div className="hidden md:block flex items-center ml-6  px-2 py-1 text-sky-600 dark:text-slate-800 bg-white rounded-md">
                  <button onClick={handleLogout}>Log out</button>
                </div>
              </>
            )}

            {!user && (
              <div className="hidden md:block">
                {pathname !== "/login" && pathname !== "/signup" && (
                  <Link
                    className="text-white rounded-md pr-2"
                    onClick={() => localStorage.setItem("visited", true)}
                    to={pathname === "/login" ? "/signup" : "/login"}
                  >
                    {pathname === "/login" ? "Sign Up" : "Log In"}
                  </Link>
                )}
              </div>
            )}
          </nav>
          {pathname !== "/login" && pathname !== "/signup" && (
            <button className="md:hidden" onClick={openMenu}>
              <svg
                className="h-6 w-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
      {isOpen && (
        <div className=" w-full p-4 bg-sky-400 dark:bg-slate-700 flex justify-between items-center md:hidden">
          {user && (
            <>
              <div className="flex items-center">
                <Link
                  className="text-xl text-white"
                  onClick={openMenu}
                  to="/countries"
                >
                  {pathname === "/" ? <h1>My countries</h1> : null}
                </Link>
              </div>
              <div className="flex items-center ml-6 px-2 py-1 text-sky-600 dark:text-slate-800 bg-white rounded-md">
                <button
                  onClick={() => {
                    handleLogout();
                    openMenu();
                  }}
                >
                  Log out
                </button>
              </div>
            </>
          )}
          {!user && (
            <div className="flex justify-end items-center w-full">
              {pathname !== "/login" && pathname !== "/signup" && (
                <Link
                  className="text-white rounded pr-2"
                  to={pathname === "/login" ? "/signup" : "/login"}
                  onClick={openMenu}
                >
                  {pathname === "/login" ? "Sign Up" : "Log In"}
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
