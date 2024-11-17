import React from "react";
import { useNavigate } from "react-router-dom";

function capitalizeTitle(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Product({ itemValues }) {
  const { title, price, image, rating, category, id } = itemValues;
  const navigate = useNavigate();

  const productDetails = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div
      className="w-full border border-lastgrey2 h-80 rounded-lg shadow-transparent opacity-95 flex flex-col justify-between cursor-pointer hover:shadow-sm"
      onClick={productDetails}
    >
      <img
        className="p-2 rounded-lg mx-auto object-cover"
        src={image}
        alt={title}
        style={{ width: "200px", height: "180px" }}
      />
      <div className="px-3 flex flex-col items-start pb-8 mt-1">
        <h5 className="font-semibold tracking-tight text-start mb-1 text-sm line-clamp-2">
          {title}
        </h5>
        <p className="text-xs text-gray-600">{capitalizeTitle(category)}</p>
        <div className="flex items-center mt-1 mb-3">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(Math.floor(rating?.rate || 0))].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold py-0.5 rounded ms-2">
            {rating?.rate || "N/A"}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold">${price}</span>
          <button
            className="font-medium rounded-lg text-xs px-3 py-1.5 text-center border text-white bg-lastmaincolor border-none hover:bg-lastmaincolorHover"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
