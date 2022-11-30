import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { FiUser, FiHeart } from "react-icons/fi";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link className="flex-shrink-0" to="/">
                🧸
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="text-black hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-black hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                    to="/babysitters"
                  >
                    Babysitters
                  </Link>
                  <Link
                    className="text-black hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                    to="/families"
                  >
                    Families
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="relative inline-block text-left">
                    {token ? (
                      <div className="flex items-center space-x-5">
                        <Link className="hover:text-green" to="/me">
                          <FiUser />
                        </Link>
                        <Link className="hover:text-green" to="/">
                          <FiHeart />
                        </Link>
                        <button
                          className="bg-white hover:bg-green text-green text-sm font-medium hover:text-white border border-green hover:border-white py-2 px-4 rounded-full"
                          onClick={() => dispatch(logOut())}
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-5">
                        <Link to="/login">
                          <button className="bg-white hover:bg-green text-green text-sm font-medium hover:text-white border border-green hover:border-white py-2 px-4 rounded-full">
                            Login
                          </button>
                        </Link>
                        <Link to="/signup">
                          <button className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full">
                            Sign up
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-black hover:text-green inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="25px"
                  height="2px"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-black hover:text-green block px-3 py-2 rounded-md text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-black hover:text-green block px-3 py-2 rounded-md text-base font-medium"
              to="/babysitters"
            >
              Babysitters
            </Link>
            <Link
              className="text-black hover:text-green block px-3 py-2 rounded-md text-base font-medium"
              to="/families"
            >
              Families
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
