import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { basketDraverSetting } from "../redux/getdatasSlice";

function MyBasketDrawer() {
  const dispatch = useDispatch();
  const { basketDrawer } = useSelector((state) => state.getdatas);
  const basketItems = useSelector((state) => state.basket.basketDatas);

  const closeBasket = () => {
    dispatch(basketDraverSetting(false));
  };

  const calculateTotal = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
  };

  return (
    <div>
      <Drawer open={basketDrawer} anchor="right" onClose={closeBasket}>
        <div className="p-4 w-80">
          {/* Drawer Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">My Basket</h2>
            <button
              onClick={closeBasket}
              className="text-gray-500 hover:text-gray-800 text-lg"
            >
              &times;
            </button>
          </div>

          {/* Basket Items */}
          <div className="mt-4 space-y-4">
            {basketItems.length > 0 ? (
              basketItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="flex items-center justify-between"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/50"}
                    alt={item.title || "Product Image"}
                    className="w-12 h-12 rounded"
                  />
                  <div className="ml-3 flex-1">
                    <h3 className="text-xs font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      ${item.price} x {item.amount}
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-700 text-sm">
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your basket is empty</p>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Total:</span>
              <span className="text-lg font-semibold">${calculateTotal()}</span>
            </div>
            <button className="w-full bg-lastmaincolor text-white py-2 rounded hover:bg-lastmaincolorHover3 transition">
              Complete Shopping
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default MyBasketDrawer;
