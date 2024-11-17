import React, { useState } from "react";
import logo from "../images/dimologo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  allDatas,
  filterItems,
  basketDraverSetting,
  accDropdownSetting,
} from "../redux/getdatasSlice";
import Badge from "@mui/material/Badge";
import AccountDropdown from "./AccountDropdown";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchItems = (e) => {
    if (e.target.value) {
      dispatch(filterItems(e.target.value));
    } else {
      dispatch(allDatas());
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".account-container")) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const openDrawer = () => {
    dispatch(basketDraverSetting(true));
  };

  return (
    <div>
      <nav className="py-1 px-1 shadow-transparent">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <img src={logo} className="h-12" alt="Flowbite Logo" />
            <span className="self-center text-5xl font-semibold whitespace-nowrap font-gemunu">
              dimo
            </span>
          </a>

          {/* Search Input Centered */}
          <div className="flex-grow flex justify-center">
            <div className="relative hidden md:block w-full max-w-lg">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none peer-focus:text-lastmaincolor">
                <svg
                  className="w-4 h-4 text-gray-500 transition-colors duration-200 peer-focus:text-lastmaincolor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbarr"
                className="block w-38rem p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-lastmaincolor focus:ring-lastmaincolor peer"
                placeholder="Search..."
                onChange={searchItems}
              />
            </div>
          </div>

          {/* Icons aligned to the right */}
          <div className="flex items-center gap-10 ml-20">
            <div className="flex items-center flex-col relative account-container">
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-lastmaincolor relative"
                onClick={toggleDropdown}
              >
                <ion-icon name="person-outline" className="text-2xl"></ion-icon>
                <p>Account</p>
              </div>
              {/* Conditionally render the dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 z-10">
                  <AccountDropdown />
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-lastmaincolor">
              <ion-icon name="heart-outline" className="text-2xl"></ion-icon>
              <p>Favorites</p>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-lastmaincolor"
              onClick={openDrawer}
            >
              <Badge
                badgeContent={5}
                color="warning"
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "17px",
                    height: "17px",
                    fontSize: "0.75rem",
                  },
                  marginRight: "1px",
                  cursor: "pointer",
                }}
              >
                <ion-icon
                  name="bag-handle-outline"
                  className="text-xl"
                ></ion-icon>
              </Badge>
              <p>My Basket</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
