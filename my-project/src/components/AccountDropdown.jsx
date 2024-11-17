import React from "react";
import { useNavigate } from "react-router-dom";

function AccountDropdown() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="dropdown" className="z-10 w-32">
        <ul
          className="py-2 text-sm bg-lastbackground border border-gray-300 rounded-lg"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 pt-2 pb-3 hover:bg-gray-50 font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              className="block px-4 pb-2 pt-3 hover:bg-gray-50 font-medium"
              onClick={() => navigate("/register")}
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountDropdown;
