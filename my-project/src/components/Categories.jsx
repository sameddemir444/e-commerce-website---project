import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesName,
  selectedCategoriesItems,
  allDatas,
  clearSelectedCategoryItems,
} from "../redux/getdatasSlice";

function Categories() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { categoriesName } = useSelector((state) => state.getdatas);

  useEffect(() => {
    dispatch(getCategoriesName());
  }, [dispatch]);

  const capitalizeWords = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All Categories") {
      dispatch(clearSelectedCategoryItems());
      dispatch(allDatas());
    } else {
      dispatch(selectedCategoriesItems(categoryName));
    }

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="mb-8">
      <nav className="bg-lastmaincolor border-b border-lastgrey px-1 shadow-transparent">
        <div className="max-w-screen-xl px-5 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex items-center font-medium mt-0 space-x-8 text-sm text-white">
              <li
                className="flex items-center gap-2 hover:text-lastmaincolorHover2 cursor-pointer"
                onClick={() => handleCategoryClick("All Categories")}
              >
                <ion-icon
                  name="menu-outline"
                  style={{ fontSize: "1.5rem" }}
                ></ion-icon>
                <span className="hover:text-lastmaincolorHover2">
                  All Categories
                </span>
              </li>

              {categoriesName &&
                categoriesName.map((title, index) => (
                  <li
                    key={index}
                    className="hover:text-lastmaincolorHover2 cursor-pointer"
                    onClick={() => handleCategoryClick(title)}
                  >
                    <span>{capitalizeWords(title)}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Categories;
